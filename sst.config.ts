import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "first-t3",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: "trackmyhotel.com",
        environment : {
          DATABASE_URL: process.env.DATABASE_URL!,
        }
      });

      stack.addOutputs({
        // SiteUrl: site.url,
        Url: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
