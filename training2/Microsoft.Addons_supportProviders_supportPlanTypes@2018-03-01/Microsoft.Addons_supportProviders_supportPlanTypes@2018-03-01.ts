import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AddonsSupportprovidersSupportplantypesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: supportProviders;
}

/**
 * AddonsSupportprovidersSupportplantypes resource
 */
export class AddonsSupportprovidersSupportplantypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AddonsSupportprovidersSupportplantypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Addons/supportProviders/supportPlanTypes@2018-03-01";
  }

  protected getResourceBody(props: AddonsSupportprovidersSupportplantypesProps): string {
    return JSON.stringify(
        
    );
  }
}
