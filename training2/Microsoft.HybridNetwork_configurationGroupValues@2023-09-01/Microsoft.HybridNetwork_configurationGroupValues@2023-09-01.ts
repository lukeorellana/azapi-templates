import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkConfigurationgroupvaluesProps extends IAzAPIBaseProps {
/**
   * The configuration group schema resource reference.
   */
readonly configurationGroupSchemaResourceReference?: DeploymentResourceIdReference;

/**
   * Set the object type
   */
readonly configurationType: OpenSecret;

/**
   * Set the object type
   */
readonly idType: OpenSecret;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Open';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Secret';

/**
   * Resource ID.
   */
readonly id?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The value which indicates if configuration values are secrets
   */
readonly configurationType: 'Open';

/**
   * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
   */
readonly configurationValue?: string;

/**
   * The value which indicates if configuration values are secrets
   */
readonly configurationType: 'Secret';

/**
   * Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string.
   */
readonly secretConfigurationValue?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
}

/**
 * HybridnetworkConfigurationgroupvalues resource
 */
export class HybridnetworkConfigurationgroupvalues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkConfigurationgroupvaluesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/configurationGroupValues@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkConfigurationgroupvaluesProps): string {
    return JSON.stringify(
        {properties: {configurationGroupSchemaResourceReference: {idType: "string"}, configurationType: "string"}}
    );
  }
}
