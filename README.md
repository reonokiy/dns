# DNS

DNS for `nokiy.net`, managed with [DNSControl](https://dnscontrol.org/) and
Cloudflare.

## Layout

- `dnsconfig.js` is the DNSControl entrypoint.
- `domains/nokiy.net.js` contains the `nokiy.net` zone.
- `groups/` is for reusable record groups, such as mail, verification, CAA, or
  service records.
- `creds.env.json` reads Cloudflare credentials from environment variables.
- `.mise.toml` pins the local DNSControl toolchain.

## Local setup

Secrets are managed by `fnox`. The project [fnox.toml](/home/lean/github.com/reonokiy/dns/fnox.toml)
uses the 1Password provider and reads from the `dev` vault.

Create a 1Password item named `cloudflare` with these fields:

- `ACCOUND_ID`
- `DNS_API_KEY`

The Cloudflare token should have the minimum required zone DNS permissions for
`nokiy.net`.

Run checks:

```bash
mise run check
```

Preview Cloudflare changes:

```bash
mise run preview
```

Apply changes:

```bash
mise run push
```

## Importing the current Cloudflare zone

The initial `domains/nokiy.net.js` file uses `NO_PURGE` so DNSControl will not
delete existing Cloudflare records before they have been imported.

Generate a starting point from Cloudflare:

```bash
mise run get-zones
```

Move the generated records into `domains/nokiy.net.js`, then run:

```bash
mise run preview
```

Once `preview` shows no unintended deletions and the file represents the full
zone, remove `NO_PURGE` from `domains/nokiy.net.js`.

## GitHub Actions

The workflow runs `dnscontrol check` on pull requests and pushes.

On pushes to `main` or `master`, it also runs `dnscontrol preview` when the
repository secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` are set.

Manual apply is available from the `workflow_dispatch` UI by setting `apply` to
`true`.
