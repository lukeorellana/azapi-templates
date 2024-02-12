import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Backend Circuit Breaker Configuration
   */
readonly circuitBreaker?: BackendCircuitBreaker;

/**
   * Backend Credentials Contract Properties
   */
readonly credentials?: BackendCredentialsContract;

/**
   * Backend Description.
   */
readonly description?: string;

/**
   * 
   */
readonly pool?: BackendBaseParametersPool;

/**
   * Backend communication protocol.
   */
readonly protocol: 'http''soap';

/**
   * Backend gateway Contract Properties
   */
readonly proxy?: BackendProxyContract;

/**
   * Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps.
   */
readonly resourceId?: string;

/**
   * Backend Title.
   */
readonly title?: string;

/**
   * Backend TLS Properties
   */
readonly tls?: BackendTlsProperties;

/**
   * Type of the backend. A backend can be either Single or Pool.
   */
readonly type?: 'Pool''Single';

/**
   * Runtime Url of the Backend.
   */
readonly url: string;

/**
   * The rules for tripping the backend.
   */
readonly rules?: CircuitBreakerRule[];

/**
   * The conditions for tripping the circuit breaker.
   */
readonly failureCondition?: CircuitBreakerFailureCondition;

/**
   * The duration for which the circuit will be tripped.
   */
readonly tripDuration?: string;

/**
   * The threshold for opening the circuit.
   */
readonly count?: number;

/**
   * The error reasons which are considered as failure.
   */
readonly errorReasons?: string[];

/**
   * The interval during which the failures are counted.
   */
readonly interval?: string;

/**
   * The threshold for opening the circuit.
   */
readonly percentage?: number;

/**
   * The status code ranges which are considered as failure.
   */
readonly statusCodeRanges?: FailureStatusCodeRange[];

/**
   * The maximum http status code.
   */
readonly max?: number;

/**
   * The minimum http status code.
   */
readonly min?: number;

/**
   * Authorization header authentication
   */
readonly authorization?: BackendAuthorizationHeaderCredentials;

/**
   * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
   */
readonly certificate?: string[];

/**
   * List of Client Certificate Ids.
   */
readonly certificateIds?: string[];

/**
   * Header Parameter description.
   */
readonly header?: BackendCredentialsContractHeader;

/**
   * Query Parameter description.
   */
readonly query?: BackendCredentialsContractQuery;

/**
   * Authentication Parameter value.
   */
readonly parameter: string;

/**
   * Authentication Scheme name.
   */
readonly scheme: string;

/**
   * 
   */
readonly {customized property}?: string[];

/**
   * 
   */
readonly {customized property}?: string[];

/**
   * The list of backend entities belonging to a pool.
   */
readonly services?: BackendPoolItem[];

/**
   * The unique ARM id of the backend entity. The ARM id should refer to an already existing backend entity.
   */
readonly id: string;

/**
   * Backend Service Fabric Cluster Properties
   */
readonly serviceFabricCluster?: BackendServiceFabricClusterProperties;

/**
   * The client certificate id for the management endpoint.
   */
readonly clientCertificateId?: string;

/**
   * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
   */
readonly clientCertificatethumbprint?: string;

/**
   * The cluster management endpoint.
   */
readonly managementEndpoints: string[];

/**
   * Maximum number of retries while attempting resolve the partition.
   */
readonly maxPartitionResolutionRetries?: number;

/**
   * Thumbprints of certificates cluster management service uses for tls communication
   */
readonly serverCertificateThumbprints?: string[];

/**
   * Server X509 Certificate Names Collection
   */
readonly serverX509Names?: X509CertificateName[];

/**
   * Thumbprint for the Issuer of the Certificate.
   */
readonly issuerCertificateThumbprint?: string;

/**
   * Password to connect to the WebProxy Server
   */
readonly password?: string;

/**
   * WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
   */
readonly url: string;

/**
   * Username to connect to the WebProxy server
   */
readonly username?: string;

/**
   * Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
   */
readonly validateCertificateChain?: bool;

/**
   * Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
   */
readonly validateCertificateName?: bool;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
