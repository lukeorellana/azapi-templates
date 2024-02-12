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
   * The name and SendRule connection string of the event hub for azureEventHub logger.Instrumentation key for applicationInsights logger.
   */
readonly credentials?: LoggerContractPropertiesCredentials;

/**
   * Logger description.
   */
readonly description?: string;

/**
   * Whether records are buffered in the logger before publishing. Default is assumed to be true.
   */
readonly isBuffered?: bool;

/**
   * Logger type.
   */
readonly loggerType: 'applicationInsights''azureEventHub''azureMonitor';

/**
   * Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
   */
readonly resourceId?: string;

/**
   * 
   */
readonly {customized property}?: string;
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
