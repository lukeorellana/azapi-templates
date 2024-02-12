import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AttestationAttestationprovidersProps extends IAzAPIBaseProps {

}

/**
 * AttestationAttestationproviders resource
 */
export class AttestationAttestationproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AttestationAttestationprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Attestation/attestationProviders@2021-06-01-preview";
  }

  protected getResourceBody(props: AttestationAttestationprovidersProps): string {
    return JSON.stringify(
        {properties: {policySigningCertificates: {keys: [{alg: "string", crv: "string", d: "string", dp: "string", dq: "string", e: "string", k: "string", kid: "string", kty: "string", n: "string", p: "string", q: "string", qi: "string", use: "string", x: "string", x5c: ["string"], y: "string"}]}, publicNetworkAccess: "string"}}
    );
  }
}
