import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AttestationAttestationprovidersProps extends IAzAPIBaseProps {
/**
   * JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations
   */
readonly policySigningCertificates?: JsonWebKeySet;

/**
   * Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The value of the "keys" parameter is an array of JWK values.  Bydefault, the order of the JWK values within the array does not implyan order of preference among them, although applications of JWK Setscan choose to assign a meaning to the order for their purposes, ifdesired.
   */
readonly keys?: JsonWebKey[];

/**
   * The "alg" (algorithm) parameter identifies the algorithm intended foruse with the key.  The values used should either be registered in theIANA "JSON Web Signature and Encryption Algorithms" registryestablished by [JWA] or be a value that contains a Collision-Resistant Name.
   */
readonly alg?: string;

/**
   * The "crv" (curve) parameter identifies the curve type
   */
readonly crv?: string;

/**
   * RSA private exponent or ECC private key
   */
readonly d?: string;

/**
   * RSA Private Key Parameter
   */
readonly dp?: string;

/**
   * RSA Private Key Parameter
   */
readonly dq?: string;

/**
   * RSA public exponent, in Base64
   */
readonly e?: string;

/**
   * Symmetric key
   */
readonly k?: string;

/**
   * The "kid" (key ID) parameter is used to match a specific key.  Thisis used, for instance, to choose among a set of keys within a JWK Setduring key rollover.  The structure of the "kid" value isunspecified.  When "kid" values are used within a JWK Set, differentkeys within the JWK Set SHOULD use distinct "kid" values.  (Oneexample in which different keys might use the same "kid" value is ifthey have different "kty" (key type) values but are considered to beequivalent alternatives by the application using them.)  The "kid"value is a case-sensitive string.
   */
readonly kid?: string;

/**
   * The "kty" (key type) parameter identifies the cryptographic algorithmfamily used with the key, such as "RSA" or "EC". "kty" values shouldeither be registered in the IANA "JSON Web Key Types" registryestablished by [JWA] or be a value that contains a Collision-Resistant Name.  The "kty" value is a case-sensitive string.
   */
readonly kty: string;

/**
   * RSA modulus, in Base64
   */
readonly n?: string;

/**
   * RSA secret prime
   */
readonly p?: string;

/**
   * RSA secret prime, with p { q
   */
readonly q?: string;

/**
   * RSA Private Key Parameter
   */
readonly qi?: string;

/**
   * Use ("public key use") identifies the intended use ofthe public key. The "use" parameter is employed to indicate whethera public key is used for encrypting data or verifying the signatureon data. Values are commonly "sig" (signature) or "enc" (encryption).
   */
readonly use?: string;

/**
   * X coordinate for the Elliptic Curve point
   */
readonly x?: string;

/**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of oneor more PKIX certificates [RFC5280].  The certificate chain isrepresented as a JSON array of certificate value strings.  Eachstring in the array is a base64-encoded (Section 4 of [RFC4648] --not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.The PKIX certificate containing the key value MUST be the firstcertificate.
   */
readonly x5c?: string[];

/**
   * Y coordinate for the Elliptic Curve point
   */
readonly y?: string;
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
