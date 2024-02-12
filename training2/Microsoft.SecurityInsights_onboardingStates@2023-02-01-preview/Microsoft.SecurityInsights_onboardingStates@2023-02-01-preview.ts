import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsOnboardingstatesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * Flag that indicates the status of the CMK setting
   */
readonly customerManagedKey?: bool;
}

/**
 * SecurityinsightsOnboardingstates resource
 */
export class SecurityinsightsOnboardingstates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsOnboardingstatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsOnboardingstatesProps): string {
    return JSON.stringify(
        {properties: {customerManagedKey: "${bool}"}, etag: "string"}
    );
  }
}
