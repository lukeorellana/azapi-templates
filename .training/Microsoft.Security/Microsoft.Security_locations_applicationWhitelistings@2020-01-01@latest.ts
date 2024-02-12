import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityLocationsApplicationwhitelistingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityLocationsApplicationwhitelistings resource
 */
export class SecurityLocationsApplicationwhitelistings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityLocationsApplicationwhitelistingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/locations/applicationWhitelistings@2020-01-01";
  }

  protected getResourceBody(props: SecurityLocationsApplicationwhitelistingsProps): string {
    return JSON.stringify(
        {properties: {enforcementMode: "string", pathRecommendations: [{action: "string", common: "${bool}", configurationStatus: "string", fileType: "string", path: "string", publisherInfo: {binaryName: "string", productName: "string", publisherName: "string", version: "string"}, type: "string", usernames: [{recommendationAction: "string", username: "string"}], userSids: ["string"]}], protectionMode: {exe: "string", executable: "string", msi: "string", script: "string"}, vmRecommendations: [{configurationStatus: "string", enforcementSupport: "string", recommendationAction: "string", resourceId: "string"}]}}
    );
  }
}
