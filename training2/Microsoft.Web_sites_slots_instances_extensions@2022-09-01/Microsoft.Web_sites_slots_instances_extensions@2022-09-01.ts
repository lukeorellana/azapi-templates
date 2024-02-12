import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsInstancesExtensionsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: instances;

/**
   * Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default.
   */
readonly appOffline?: bool;

/**
   * SQL Connection String
   */
readonly connectionString?: string;

/**
   * Database Type
   */
readonly dbType?: string;

/**
   * Package URI
   */
readonly packageUri?: string;

/**
   * MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used.
   */
readonly setParameters?: object;

/**
   * URI of MSDeploy Parameters file. Must not be set if SetParameters is used.
   */
readonly setParametersXmlFileUri?: string;

/**
   * Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default.
   */
readonly skipAppData?: bool;
}

/**
 * WebSitesSlotsInstancesExtensions resource
 */
export class WebSitesSlotsInstancesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsInstancesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/instances/extensions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsInstancesExtensionsProps): string {
    return JSON.stringify(
        {properties: {appOffline: "${bool}", connectionString: "string", dbType: "string", packageUri: "string", setParameters: {}, setParametersXmlFileUri: "string", skipAppData: "${bool}"}, kind: "string"}
    );
  }
}
