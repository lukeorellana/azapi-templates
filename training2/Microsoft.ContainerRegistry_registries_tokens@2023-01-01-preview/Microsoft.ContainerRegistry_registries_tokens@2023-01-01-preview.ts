import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTokensProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The credentials that can be used for authenticating the token.
   */
readonly credentials?: TokenCredentialsProperties;

/**
   * The resource ID of the scope map to which the token will be associated with.
   */
readonly scopeMapId?: string;

/**
   * The status of the token example enabled or disabled.
   */
readonly status?: 'disabled''enabled';

/**
   * 
   */
readonly certificates?: TokenCertificate[];

/**
   * 
   */
readonly passwords?: TokenPassword[];

/**
   * Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
   */
readonly encodedPemCertificate?: string;

/**
   * The expiry datetime of the certificate.
   */
readonly expiry?: string;

/**
   * The thumbprint of the certificate.
   */
readonly thumbprint?: string;

/**
   * The creation datetime of the password.
   */
readonly creationTime?: string;

/**
   * The expiry datetime of the password.
   */
readonly expiry?: string;
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
