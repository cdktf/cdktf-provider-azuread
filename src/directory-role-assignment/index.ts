// https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the app-specific scope when the assignment scope is app-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#app_scope_id DirectoryRoleAssignment#app_scope_id}
  */
  readonly appScopeId?: string;
  /**
  * Identifier of the app-specific scope when the assignment scope is app-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#app_scope_object_id DirectoryRoleAssignment#app_scope_object_id}
  */
  readonly appScopeObjectId?: string;
  /**
  * Identifier of the directory object representing the scope of the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#directory_scope_id DirectoryRoleAssignment#directory_scope_id}
  */
  readonly directoryScopeId?: string;
  /**
  * Identifier of the directory object representing the scope of the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#directory_scope_object_id DirectoryRoleAssignment#directory_scope_object_id}
  */
  readonly directoryScopeObjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The object ID of the member principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#principal_object_id DirectoryRoleAssignment#principal_object_id}
  */
  readonly principalObjectId: string;
  /**
  * The object ID of the directory role for this assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#role_id DirectoryRoleAssignment#role_id}
  */
  readonly roleId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#timeouts DirectoryRoleAssignment#timeouts}
  */
  readonly timeouts?: DirectoryRoleAssignmentTimeouts;
}
export interface DirectoryRoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#update DirectoryRoleAssignment#update}
  */
  readonly update?: string;
}

export function directoryRoleAssignmentTimeoutsToTerraform(struct?: DirectoryRoleAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DirectoryRoleAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryRoleAssignmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryRoleAssignmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment azuread_directory_role_assignment}
*/
export class DirectoryRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_directory_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryRoleAssignment to import
  * @param importFromId The id of the existing DirectoryRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_directory_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/directory_role_assignment azuread_directory_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_directory_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.44.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appScopeId = config.appScopeId;
    this._appScopeObjectId = config.appScopeObjectId;
    this._directoryScopeId = config.directoryScopeId;
    this._directoryScopeObjectId = config.directoryScopeObjectId;
    this._id = config.id;
    this._principalObjectId = config.principalObjectId;
    this._roleId = config.roleId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_scope_id - computed: true, optional: true, required: false
  private _appScopeId?: string; 
  public get appScopeId() {
    return this.getStringAttribute('app_scope_id');
  }
  public set appScopeId(value: string) {
    this._appScopeId = value;
  }
  public resetAppScopeId() {
    this._appScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeIdInput() {
    return this._appScopeId;
  }

  // app_scope_object_id - computed: true, optional: true, required: false
  private _appScopeObjectId?: string; 
  public get appScopeObjectId() {
    return this.getStringAttribute('app_scope_object_id');
  }
  public set appScopeObjectId(value: string) {
    this._appScopeObjectId = value;
  }
  public resetAppScopeObjectId() {
    this._appScopeObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeObjectIdInput() {
    return this._appScopeObjectId;
  }

  // directory_scope_id - computed: true, optional: true, required: false
  private _directoryScopeId?: string; 
  public get directoryScopeId() {
    return this.getStringAttribute('directory_scope_id');
  }
  public set directoryScopeId(value: string) {
    this._directoryScopeId = value;
  }
  public resetDirectoryScopeId() {
    this._directoryScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryScopeIdInput() {
    return this._directoryScopeId;
  }

  // directory_scope_object_id - computed: true, optional: true, required: false
  private _directoryScopeObjectId?: string; 
  public get directoryScopeObjectId() {
    return this.getStringAttribute('directory_scope_object_id');
  }
  public set directoryScopeObjectId(value: string) {
    this._directoryScopeObjectId = value;
  }
  public resetDirectoryScopeObjectId() {
    this._directoryScopeObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryScopeObjectIdInput() {
    return this._directoryScopeObjectId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DirectoryRoleAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DirectoryRoleAssignmentTimeouts) {
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
      app_scope_id: cdktf.stringToTerraform(this._appScopeId),
      app_scope_object_id: cdktf.stringToTerraform(this._appScopeObjectId),
      directory_scope_id: cdktf.stringToTerraform(this._directoryScopeId),
      directory_scope_object_id: cdktf.stringToTerraform(this._directoryScopeObjectId),
      id: cdktf.stringToTerraform(this._id),
      principal_object_id: cdktf.stringToTerraform(this._principalObjectId),
      role_id: cdktf.stringToTerraform(this._roleId),
      timeouts: directoryRoleAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
