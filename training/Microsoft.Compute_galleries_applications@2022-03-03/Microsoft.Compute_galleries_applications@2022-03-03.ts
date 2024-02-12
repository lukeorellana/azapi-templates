import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ComputeGalleriesApplicationsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, and periods.Start and end with alphanumeric. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:galleries |
// | properties | Describes the properties of a gallery Application Definition. | GalleryApplicationProperties |

// | Name | Description | Value |
// |-|-|-|
// | customActions | A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application. | GalleryApplicationCustomAction[] |
// | description | The description of this gallery Application Definition resource. This property is updatable. | string |
// | endOfLifeDate | The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. | string |
// | eula | The Eula agreement for the gallery Application Definition. | string |
// | privacyStatementUri | The privacy statement uri. | string |
// | releaseNoteUri | The release note uri. | string |
// | supportedOSType | This property allows you to specify the supported type of the OS that application is built for.Possible values are:WindowsLinux | 'Linux''Windows' (required) |

// | Name | Description | Value |
// |-|-|-|
// | description | Description to help the users understand what this custom action does. | string |
// | name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
// | parameters | The parameters that this custom action uses | GalleryApplicationCustomActionParameter[] |
// | script | The script to run when executing this custom action. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | defaultValue | The default value of the parameter.  Only applies to string types | string |
// | description | A description to help users understand what this parameter means | string |
// | name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
// | required | Indicates whether this parameter must be passed when running the custom action. | bool |
// | type | Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob | 'ConfigurationDataBlob''LogOutputBlob''String' |
