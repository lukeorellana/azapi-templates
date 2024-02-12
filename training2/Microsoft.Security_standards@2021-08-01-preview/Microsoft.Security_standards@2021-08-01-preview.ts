import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityStandardsProps extends IAzAPIBaseProps {
/**
   * Kind of the resource
   */
readonly kind?: string;

/**
   * Entity tag is used for comparing two or more entities from the same requested resource.
   */
readonly etag?: string;

/**
   * category of the standard provided
   */
readonly category?: string;

/**
   * List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys.
   */
readonly components?: StandardComponentProperties[];

/**
   * description of the standard
   */
readonly description?: string;

/**
   * display name of the standard, equivalent to the standardId
   */
readonly displayName?: string;

/**
   * List of all standard supported clouds.
   */
readonly supportedClouds?: String array containing any of:'AWS''GCP';

/**
   * Component Key matching componentMetadata
   */
readonly key?: string;
}

/**
 * SecurityStandards resource
 */
export class SecurityStandards extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityStandardsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/standards@2021-08-01-preview";
  }

  protected getResourceBody(props: SecurityStandardsProps): string {
    return JSON.stringify(
        {properties: {category: "string", components: [{key: "string"}], description: "string", displayName: "string", supportedClouds: ["string"]}, kind: "string", etag: "string"}
    );
  }
}
