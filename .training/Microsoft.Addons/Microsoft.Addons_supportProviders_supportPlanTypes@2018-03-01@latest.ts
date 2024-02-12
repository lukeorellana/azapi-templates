import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AddonsSupportprovidersSupportplantypesProps extends IAzAPIBaseProps {

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
