// https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryRoleMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the member
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#member_object_id DirectoryRoleMember#member_object_id}
  */
  readonly memberObjectId?: string;
  /**
  * The object ID of the directory role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#role_object_id DirectoryRoleMember#role_object_id}
  */
  readonly roleObjectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#timeouts DirectoryRoleMember#timeouts}
  */
  readonly timeouts?: DirectoryRoleMemberTimeouts;
}
export interface DirectoryRoleMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#create DirectoryRoleMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#delete DirectoryRoleMember#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#read DirectoryRoleMember#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#update DirectoryRoleMember#update}
  */
  readonly update?: string;
}

function directoryRoleMemberTimeoutsToTerraform(struct?: DirectoryRoleMemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html azuread_directory_role_member}
*/
export class DirectoryRoleMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_directory_role_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html azuread_directory_role_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryRoleMemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DirectoryRoleMemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_directory_role_member',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._memberObjectId = config.memberObjectId;
    this._roleObjectId = config.roleObjectId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_object_id - computed: false, optional: true, required: false
  private _memberObjectId?: string;
  public get memberObjectId() {
    return this.getStringAttribute('member_object_id');
  }
  public set memberObjectId(value: string ) {
    this._memberObjectId = value;
  }
  public resetMemberObjectId() {
    this._memberObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberObjectIdInput() {
    return this._memberObjectId
  }

  // role_object_id - computed: false, optional: true, required: false
  private _roleObjectId?: string;
  public get roleObjectId() {
    return this.getStringAttribute('role_object_id');
  }
  public set roleObjectId(value: string ) {
    this._roleObjectId = value;
  }
  public resetRoleObjectId() {
    this._roleObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleObjectIdInput() {
    return this._roleObjectId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DirectoryRoleMemberTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DirectoryRoleMemberTimeouts ) {
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
      member_object_id: cdktf.stringToTerraform(this._memberObjectId),
      role_object_id: cdktf.stringToTerraform(this._roleObjectId),
      timeouts: directoryRoleMemberTimeoutsToTerraform(this._timeouts),
    };
  }
}
