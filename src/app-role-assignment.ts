// https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the app role to be assigned
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#app_role_id AppRoleAssignment#app_role_id}
  */
  readonly appRoleId: string;
  /**
  * The object ID of the user, group or service principal to be assigned this app role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#principal_object_id AppRoleAssignment#principal_object_id}
  */
  readonly principalObjectId: string;
  /**
  * The object ID of the service principal representing the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#resource_object_id AppRoleAssignment#resource_object_id}
  */
  readonly resourceObjectId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#timeouts AppRoleAssignment#timeouts}
  */
  readonly timeouts?: AppRoleAssignmentTimeouts;
}
export interface AppRoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#create AppRoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#delete AppRoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#read AppRoleAssignment#read}
  */
  readonly read?: string;
}

function appRoleAssignmentTimeoutsToTerraform(struct?: AppRoleAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html azuread_app_role_assignment}
*/
export class AppRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_app_role_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html azuread_app_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_app_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appRoleId = config.appRoleId;
    this._principalObjectId = config.principalObjectId;
    this._resourceObjectId = config.resourceObjectId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_role_id - computed: false, optional: false, required: true
  private _appRoleId: string;
  public get appRoleId() {
    return this.getStringAttribute('app_role_id');
  }
  public set appRoleId(value: string) {
    this._appRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleIdInput() {
    return this._appRoleId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_display_name - computed: true, optional: false, required: false
  public get principalDisplayName() {
    return this.getStringAttribute('principal_display_name');
  }

  // principal_object_id - computed: false, optional: false, required: true
  private _principalObjectId: string;
  public get principalObjectId() {
    return this.getStringAttribute('principal_object_id');
  }
  public set principalObjectId(value: string) {
    this._principalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalObjectIdInput() {
    return this._principalObjectId
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // resource_display_name - computed: true, optional: false, required: false
  public get resourceDisplayName() {
    return this.getStringAttribute('resource_display_name');
  }

  // resource_object_id - computed: false, optional: false, required: true
  private _resourceObjectId: string;
  public get resourceObjectId() {
    return this.getStringAttribute('resource_object_id');
  }
  public set resourceObjectId(value: string) {
    this._resourceObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceObjectIdInput() {
    return this._resourceObjectId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppRoleAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppRoleAssignmentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_role_id: cdktf.stringToTerraform(this._appRoleId),
      principal_object_id: cdktf.stringToTerraform(this._principalObjectId),
      resource_object_id: cdktf.stringToTerraform(this._resourceObjectId),
      timeouts: appRoleAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
