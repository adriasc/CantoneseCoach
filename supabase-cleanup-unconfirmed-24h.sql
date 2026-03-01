-- Safe cleanup for stale unconfirmed users (older than 24 hours)
-- Run this in Supabase SQL Editor as project owner.
-- It deletes only users that are:
-- 1) not email-confirmed
-- 2) never signed in
-- 3) older than the retention window (default 24h)

create schema if not exists private;

create or replace function private.cleanup_unconfirmed_auth_users(retention interval default interval '24 hours')
returns integer
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  deleted_count integer := 0;
begin
  with doomed as (
    select id
    from auth.users
    where email_confirmed_at is null
      and last_sign_in_at is null
      and created_at < now() - retention
  )
  delete from auth.users u
  using doomed d
  where u.id = d.id;

  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

-- Optional: run once now (dry run alternative below).
-- select private.cleanup_unconfirmed_auth_users(interval '24 hours');

-- Optional dry-run count (no delete):
-- select count(*) as stale_unconfirmed_users
-- from auth.users
-- where email_confirmed_at is null
--   and last_sign_in_at is null
--   and created_at < now() - interval '24 hours';

-- Optional scheduler (requires pg_cron/cron enabled in your project):
-- Runs daily at 03:15 UTC.
-- select cron.schedule(
--   'cleanup-unconfirmed-auth-users-24h',
--   '15 3 * * *',
--   $$select private.cleanup_unconfirmed_auth_users(interval '24 hours');$$
-- );
