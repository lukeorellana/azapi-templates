import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesCredentialsetsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesCredentialsets resource
 */
export class ContainerregistryRegistriesCredentialsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesCredentialsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesCredentialsetsProps): string {
    return JSON.stringify(
        {properties: {authCredentials: [{name: "Credential1", passwordSecretIdentifier: "string", usernameSecretIdentifier: "string"}], loginServer: "string"}}
    );
  }
}
