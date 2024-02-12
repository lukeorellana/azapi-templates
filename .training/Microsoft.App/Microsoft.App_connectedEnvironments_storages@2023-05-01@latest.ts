import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsStoragesProps extends IAzAPIBaseProps {

}

/**
 * AppConnectedenvironmentsStorages resource
 */
export class AppConnectedenvironmentsStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppConnectedenvironmentsStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/connectedEnvironments/storages@2023-05-01";
  }

  protected getResourceBody(props: AppConnectedenvironmentsStoragesProps): string {
    return JSON.stringify(
        {properties: {azureFile: {accessMode: "string", accountKey: "string", accountName: "string", shareName: "string"}}}
    );
  }
}
