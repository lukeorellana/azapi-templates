import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AdvisorConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * AdvisorConfigurations resource
 */
export class AdvisorConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AdvisorConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Advisor/configurations@2023-01-01";
  }

  protected getResourceBody(props: AdvisorConfigurationsProps): string {
    return JSON.stringify(
        {properties: {digests: [{actionGroupResourceId: "string", categories: ["string"], frequency: "${int}", language: "string", name: "string", state: "string"}], duration: "string", exclude: "${bool}", lowCpuThreshold: "string"}}
    );
  }
}
