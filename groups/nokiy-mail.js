var NOKIY_MAIL_RECORDS = [
  MX("@", 10, "alt3.aspmx.l.google.com.", TTL(3600)),
  MX("@", 5, "alt1.aspmx.l.google.com.", TTL(3600)),
  MX("@", 1, "aspmx.l.google.com.", TTL(3600)),
  MX("@", 10, "alt4.aspmx.l.google.com.", TTL(3600)),
  MX("@", 5, "alt2.aspmx.l.google.com.", TTL(3600)),
  TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:14176d6df525482e970d9041315d91cd@dmarc-reports.cloudflare.net"),
  TXT("@", "v=spf1 include:_spf.google.com -all", TTL(3600)),
  TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqV32HTF6yrRUjbupBsflTfvC73itOdcYZBZZw3dZIpXXWgTyEoNgubKjZHW6/ntzEOjuoCSNgRufpfVEoghRLFosEpHGe+td5Oj+512EZ/etXVvSFiVEowCC2OS1yMbQMOD9lum923cb/vo06BMtSldodxlihCSepyKbOuXW7Fnm5Z7Sy6YIqJFxeZ3ThR2p1YiMkFT+4Hq7a3MIauMfTXA1TiDg+s4XO4uatJWyamsb4cEx59GfbftJJkmdheXiMWlQuWP7AiVvXdlGCU5m1Cvw3LVPwOK1Br5NAZROjLlLK5/IXfx+KKOyo4ABfslQxx3wG8uf1+DMUWIqsYakzwIDAQAB"),
];
