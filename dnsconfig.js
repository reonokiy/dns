var REG_NONE = NewRegistrar("none");
var CF = NewDnsProvider("cloudflare");

require_glob("./groups/", false);
require_glob("./domains/", false);
