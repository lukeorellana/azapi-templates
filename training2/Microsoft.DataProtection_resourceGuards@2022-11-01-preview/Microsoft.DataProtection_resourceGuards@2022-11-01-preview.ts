import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionResourceguardsProps extends IAzAPIBaseProps {
/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Input Managed Identity Details
   */
readonly identity?: DppIdentityDetails;

/**
   * The identityType which can be either SystemAssigned or None
   */
readonly type?: string;

/**
   * List of critical operations which are not protected by this resourceGuard
   */
readonly vaultCriticalOperationExclusionList?: string[];
}

/**
 * DataprotectionResourceguards resource
 */
export class DataprotectionResourceguards extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionResourceguardsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/resourceGuards@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionResourceguardsProps): string {
    return JSON.stringify(
        {properties: {vaultCriticalOperationExclusionList: ["string"]}, eTag: "string"}
    );
  }
}
