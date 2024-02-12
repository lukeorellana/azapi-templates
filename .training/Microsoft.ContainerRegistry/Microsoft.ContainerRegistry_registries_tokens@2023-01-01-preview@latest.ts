import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTokensProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesTokens resource
 */
export class ContainerregistryRegistriesTokens extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTokensProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTokensProps): string {
    return JSON.stringify(
        {properties: {credentials: {certificates: [{encodedPemCertificate: "string", expiry: "string", name: "string", thumbprint: "string"}], passwords: [{creationTime: "string", expiry: "string", name: "string"}]}, scopeMapId: "string", status: "string"}}
    );
  }
}
