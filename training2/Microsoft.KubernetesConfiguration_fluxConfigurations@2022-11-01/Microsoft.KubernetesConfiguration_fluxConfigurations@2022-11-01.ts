import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationFluxconfigurationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Parameters to reconcile to the AzureBlob source kind type.
   */
readonly azureBlob?: AzureBlobDefinition;

/**
   * Parameters to reconcile to the Bucket source kind type.
   */
readonly bucket?: BucketDefinition;

/**
   * Key-value pairs of protected configuration settings for the configuration
   */
readonly configurationProtectedSettings?: object;

/**
   * Parameters to reconcile to the GitRepository source kind type.
   */
readonly gitRepository?: GitRepositoryDefinition;

/**
   * Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
   */
readonly kustomizations?: object;

/**
   * The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
   */
readonly namespace?: string;

/**
   * Scope at which the operator will be installed.
   */
readonly scope?: 'cluster''namespace';

/**
   * Source Kind to pull the configuration data from.
   */
readonly sourceKind?: 'AzureBlob''Bucket''GitRepository';

/**
   * Whether this configuration should suspend its reconciliation of its kustomizations and sources.
   */
readonly suspend?: bool;

/**
   * The account key (shared key) to access the storage account
   */
readonly accountKey?: string;

/**
   * The Azure Blob container name to sync from the url endpoint for the flux configuration.
   */
readonly containerName?: string;

/**
   * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
   */
readonly localAuthRef?: string;

/**
   * Parameters to authenticate using a Managed Identity.
   */
readonly managedIdentity?: ManagedIdentityDefinition;

/**
   * The Shared Access token to access the storage container
   */
readonly sasToken?: string;

/**
   * Parameters to authenticate using Service Principal.
   */
readonly servicePrincipal?: ServicePrincipalDefinition;

/**
   * The interval at which to re-reconcile the cluster Azure Blob source with the remote.
   */
readonly syncIntervalInSeconds?: number;

/**
   * The maximum time to attempt to reconcile the cluster Azure Blob source with the remote.
   */
readonly timeoutInSeconds?: number;

/**
   * The URL to sync for the flux configuration Azure Blob storage account.
   */
readonly url?: string;

/**
   * The client Id for authenticating a Managed Identity.
   */
readonly clientId?: string;

/**
   * Base64-encoded certificate used to authenticate a Service Principal
   */
readonly clientCertificate?: string;

/**
   * The password for the certificate used to authenticate a Service Principal
   */
readonly clientCertificatePassword?: string;

/**
   * Specifies whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the Client Certificate
   */
readonly clientCertificateSendChain?: bool;

/**
   * The client Id for authenticating a Service Principal.
   */
readonly clientId?: string;

/**
   * The client secret for authenticating a Service Principal
   */
readonly clientSecret?: string;

/**
   * The tenant Id for authenticating a Service Principal
   */
readonly tenantId?: string;

/**
   * Plaintext access key used to securely access the S3 bucket
   */
readonly accessKey?: string;

/**
   * The bucket name to sync from the url endpoint for the flux configuration.
   */
readonly bucketName?: string;

/**
   * Specify whether to use insecure communication when puling data from the S3 bucket.
   */
readonly insecure?: bool;

/**
   * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
   */
readonly localAuthRef?: string;

/**
   * The interval at which to re-reconcile the cluster bucket source with the remote.
   */
readonly syncIntervalInSeconds?: number;

/**
   * The maximum time to attempt to reconcile the cluster bucket source with the remote.
   */
readonly timeoutInSeconds?: number;

/**
   * The URL to sync for the flux configuration S3 bucket.
   */
readonly url?: string;

/**
   * Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS
   */
readonly httpsCACert?: string;

/**
   * Plaintext HTTPS username used to access private git repositories over HTTPS
   */
readonly httpsUser?: string;

/**
   * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
   */
readonly localAuthRef?: string;

/**
   * The source reference for the GitRepository object.
   */
readonly repositoryRef?: RepositoryRefDefinition;

/**
   * Base64-encoded known_hosts value containing public SSH keys required to access private git repositories over SSH
   */
readonly sshKnownHosts?: string;

/**
   * The interval at which to re-reconcile the cluster git repository source with the remote.
   */
readonly syncIntervalInSeconds?: number;

/**
   * The maximum time to attempt to reconcile the cluster git repository source with the remote.
   */
readonly timeoutInSeconds?: number;

/**
   * The URL to sync for the flux configuration git repository.
   */
readonly url?: string;

/**
   * The git repository branch name to checkout.
   */
readonly branch?: string;

/**
   * The commit SHA to checkout. This value must be combined with the branch name to be valid. This takes precedence over semver.
   */
readonly commit?: string;

/**
   * The semver range used to match against git repository tags. This takes precedence over tag.
   */
readonly semver?: string;

/**
   * The git repository tag name to checkout. This takes precedence over branch.
   */
readonly tag?: string;
}

/**
 * KubernetesconfigurationFluxconfigurations resource
 */
export class KubernetesconfigurationFluxconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationFluxconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01";
  }

  protected getResourceBody(props: KubernetesconfigurationFluxconfigurationsProps): string {
    return JSON.stringify(
        {properties: {azureBlob: {accountKey: "string", containerName: "string", localAuthRef: "string", managedIdentity: {clientId: "string"}, sasToken: "string", servicePrincipal: {clientCertificate: "string", clientCertificatePassword: "string", clientCertificateSendChain: "${bool}", clientId: "string", clientSecret: "string", tenantId: "string"}, syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, bucket: {accessKey: "string", bucketName: "string", insecure: "${bool}", localAuthRef: "string", syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, configurationProtectedSettings: {}, gitRepository: {httpsCACert: "string", httpsUser: "string", localAuthRef: "string", repositoryRef: {branch: "string", commit: "string", semver: "string", tag: "string"}, sshKnownHosts: "string", syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, kustomizations: {}, namespace: "string", scope: "string", sourceKind: "string", suspend: "${bool}"}}
    );
  }
}
