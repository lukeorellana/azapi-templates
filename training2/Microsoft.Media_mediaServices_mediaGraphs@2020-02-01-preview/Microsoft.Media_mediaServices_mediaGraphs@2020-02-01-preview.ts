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
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * Media Graph description.
   */
readonly description?: string;

/**
   * Media Graph sinks.
   */
readonly sinks: MediaGraphSink[];

/**
   * Media Graph sources.
   */
readonly sources: MediaGraphSource[];

/**
   * Sink inputs.
   */
readonly inputs: string[];

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.MediaGraphAssetSink;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphAssetSink';

/**
   * Asset name.
   */
readonly assetName: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.MediaGraphRtspSource;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphRtspSource';

/**
   * RTSP endpoint of the stream being connected to.
   */
readonly endpoint: MediaGraphEndponumber;

/**
   * Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.
   */
readonly transport: 'Http''Tcp';

/**
   * Polymorphic credentials to present to the endpoint.
   */
readonly credentials?: MediaGraphCredentials;

/**
   * Url for the endpoint.
   */
readonly url: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.MediaGraphClearEndponumber#Microsoft.Media.MediaGraphTlsEndponumber;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.MediaGraphUsernamePasswordCredentials;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials';

/**
   * Password for a username/password pair.
   */
readonly password: string;

/**
   * Username for a username/password pair.
   */
readonly username: string;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphClearEndponumber';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphTlsEndponumber';

/**
   * What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
   */
readonly trustedCertificates?: MediaGraphCertificateSource;

/**
   * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
   */
readonly validationOptions?: MediaGraphTlsValidationOptions;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.MediaGraphPemCertificateList;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.MediaGraphPemCertificateList';

/**
   * PEM formatted public certificates, one per entry.
   */
readonly certificates: string[];

/**
   * Ignore the host name (common name) during validation.
   */
readonly ignoreHostname: bool;

/**
   * Ignore the integrity of the certificate chain at the current time.
   */
readonly ignoreSignature: bool;
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
