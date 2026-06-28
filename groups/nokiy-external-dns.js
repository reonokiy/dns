var NOKIY_EXTERNAL_DNS_IGNORES = [
  // Kubernetes external-dns uses TXT ownership records under _external-dns.
  IGNORE_EXTERNAL_DNS("_external-dns."),

  // Hard guards for service records currently owned by external-dns.
  IGNORE_NAME("ai-gateway"),
  IGNORE_NAME("arpk"),
  IGNORE_NAME("grafana"),
  IGNORE_NAME("id"),
  IGNORE_NAME("lakefs"),
  IGNORE_NAME("link"),
  IGNORE_NAME("matrix"),
  IGNORE_NAME("metrics"),
  IGNORE_NAME("nibapi"),
  IGNORE_NAME("ntfy"),
  IGNORE_NAME("phoenix"),
  IGNORE_NAME("rss"),
  IGNORE_NAME("rsshub"),
  IGNORE_NAME("sky"),
  IGNORE_NAME("social"),
  IGNORE_NAME("unspeech"),
];
