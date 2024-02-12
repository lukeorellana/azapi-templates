import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsDaprcomponentsProps extends IAzAPIBaseProps {

}

/**
 * AppConnectedenvironmentsDaprcomponents resource
 */
export class AppConnectedenvironmentsDaprcomponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppConnectedenvironmentsDaprcomponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/connectedEnvironments/daprComponents@2023-05-01";
  }

  protected getResourceBody(props: AppConnectedenvironmentsDaprcomponentsProps): string {
    return JSON.stringify(
        {properties: {componentType: "string", ignoreErrors: "${bool}", initTimeout: "string", metadata: [{name: "string", secretRef: "string", value: "string"}], scopes: ["string"], secrets: [{identity: "string", keyVaultUrl: "string", name: "string", value: "string"}], secretStoreComponent: "string", version: "string"}}
    );
  }
}
