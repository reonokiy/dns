var NOKIY_MAIL_RECORDS = [
  MX("@", 10, "alt3.aspmx.l.google.com.", TTL(3600)),
  MX("@", 5, "alt1.aspmx.l.google.com.", TTL(3600)),
  MX("@", 1, "aspmx.l.google.com.", TTL(3600)),
  MX("@", 10, "alt4.aspmx.l.google.com.", TTL(3600)),
  MX("@", 5, "alt2.aspmx.l.google.com.", TTL(3600)),
  TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:14176d6df525482e970d9041315d91cd@dmarc-reports.cloudflare.net"),
  TXT("@", "v=spf1 include:_spf.google.com -all", TTL(3600)),
];
