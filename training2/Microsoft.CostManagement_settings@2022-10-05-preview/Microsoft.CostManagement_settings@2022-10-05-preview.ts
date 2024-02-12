import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementSettingsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: taginheritance;

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
   */
readonly eTag?: string;

/**
   * Specifies the kind of settings.
   */
readonly kind: 'taginheritance';

/**
   * When resource has the same tag as subscription or resource group and this property is set to true - the subscription or resource group tag will be applied. If subscription and resource group tags are also the same, subscription tag will be applied.
   */
readonly preferContainerTags: bool;
}

/**
 * CostmanagementSettings resource
 */
export class CostmanagementSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/settings@2022-10-05-preview";
  }

  protected getResourceBody(props: CostmanagementSettingsProps): string {
    return JSON.stringify(
        {kind: "string", eTag: "string"}
    );
  }
}
