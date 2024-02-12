import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LoadtestserviceLoadtestsProps extends IAzAPIBaseProps {

}

/**
 * LoadtestserviceLoadtests resource
 */
export class LoadtestserviceLoadtests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LoadtestserviceLoadtestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LoadTestService/loadTests@2022-12-01";
  }

  protected getResourceBody(props: LoadtestserviceLoadtestsProps): string {
    return JSON.stringify(
        {properties: {description: "string", encryption: {identity: {resourceId: "string", type: "string"}, keyUrl: "string"}}}
    );
  }
}
