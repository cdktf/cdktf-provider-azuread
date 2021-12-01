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

export function appRoleAssignmentTimeoutsToTerraform(struct?: AppRoleAssignmentTimeoutsOutputReference | AppRoleAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class AppRoleAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppRoleAssignmentTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppRoleAssignmentTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_role_id - computed: false, optional: false, required: true
  private _appRoleId?: string; 
  public get appRoleId() {
    return this.getStringAttribute('app_role_id');
  }
  public set appRoleId(value: string) {
    this._appRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleIdInput() {
    return this._appRoleId;
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
  private _principalObjectId?: string; 
  public get principalObjectId() {
    return this.getStringAttribute('principal_object_id');
  }
  public set principalObjectId(value: string) {
    this._principalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalObjectIdInput() {
    return this._principalObjectId;
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
  private _resourceObjectId?: string; 
  public get resourceObjectId() {
    return this.getStringAttribute('resource_object_id');
  }
  public set resourceObjectId(value: string) {
    this._resourceObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceObjectIdInput() {
    return this._resourceObjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppRoleAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppRoleAssignmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_role_id: cdktf.stringToTerraform(this._appRoleId),
      principal_object_id: cdktf.stringToTerraform(this._principalObjectId),
      resource_object_id: cdktf.stringToTerraform(this._resourceObjectId),
      timeouts: appRoleAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
