import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesApplicationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:galleries;

/**
   * A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application.
   */
readonly customActions?: GalleryApplicationCustomAction[];

/**
   * The description of this gallery Application Definition resource. This property is updatable.
   */
readonly description?: string;

/**
   * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
   */
readonly endOfLifeDate?: string;

/**
   * The Eula agreement for the gallery Application Definition.
   */
readonly eula?: string;

/**
   * The privacy statement uri.
   */
readonly privacyStatementUri?: string;

/**
   * The release note uri.
   */
readonly releaseNoteUri?: string;

/**
   * This property allows you to specify the supported type of the OS that application is built for.Possible values are:WindowsLinux
   */
readonly supportedOSType: 'Linux''Windows';

/**
   * Description to help the users understand what this custom action does.
   */
readonly description?: string;

/**
   * The parameters that this custom action uses
   */
readonly parameters?: GalleryApplicationCustomActionParameter[];

/**
   * The script to run when executing this custom action.
   */
readonly script: string;

/**
   * The default value of the parameter.  Only applies to string types
   */
readonly defaultValue?: string;

/**
   * A description to help users understand what this parameter means
   */
readonly description?: string;

/**
   * Indicates whether this parameter must be passed when running the custom action.
   */
readonly required?: bool;

/**
   * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
   */
readonly type?: 'ConfigurationDataBlob''LogOutputBlob''String';
}

/**
 * ComputeGalleriesApplications resource
 */
export class ComputeGalleriesApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/applications@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesApplicationsProps): string {
    return JSON.stringify(
        {properties: {customActions: [{description: "string", name: "string", parameters: [{defaultValue: "string", description: "string", name: "string", required: "${bool}", type: "string"}], script: "string"}], description: "string", endOfLifeDate: "string", eula: "string", privacyStatementUri: "string", releaseNoteUri: "string", supportedOSType: "string"}}
    );
  }
}
