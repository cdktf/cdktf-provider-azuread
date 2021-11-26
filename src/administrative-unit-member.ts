// https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdministrativeUnitMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#administrative_unit_object_id AdministrativeUnitMember#administrative_unit_object_id}
  */
  readonly administrativeUnitObjectId?: string;
  /**
  * The object ID of the member
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#member_object_id AdministrativeUnitMember#member_object_id}
  */
  readonly memberObjectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#timeouts AdministrativeUnitMember#timeouts}
  */
  readonly timeouts?: AdministrativeUnitMemberTimeouts;
}
export interface AdministrativeUnitMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#create AdministrativeUnitMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#delete AdministrativeUnitMember#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#read AdministrativeUnitMember#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html#update AdministrativeUnitMember#update}
  */
  readonly update?: string;
}

function administrativeUnitMemberTimeoutsToTerraform(struct?: AdministrativeUnitMemberTimeoutsOutputReference | AdministrativeUnitMemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class AdministrativeUnitMemberTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html azuread_administrative_unit_member}
*/
export class AdministrativeUnitMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_administrative_unit_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member.html azuread_administrative_unit_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministrativeUnitMemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdministrativeUnitMemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_administrative_unit_member',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administrativeUnitObjectId = config.administrativeUnitObjectId;
    this._memberObjectId = config.memberObjectId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative_unit_object_id - computed: false, optional: true, required: false
  private _administrativeUnitObjectId?: string | undefined; 
  public get administrativeUnitObjectId() {
    return this.getStringAttribute('administrative_unit_object_id');
  }
  public set administrativeUnitObjectId(value: string | undefined) {
    this._administrativeUnitObjectId = value;
  }
  public resetAdministrativeUnitObjectId() {
    this._administrativeUnitObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeUnitObjectIdInput() {
    return this._administrativeUnitObjectId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_object_id - computed: false, optional: true, required: false
  private _memberObjectId?: string | undefined; 
  public get memberObjectId() {
    return this.getStringAttribute('member_object_id');
  }
  public set memberObjectId(value: string | undefined) {
    this._memberObjectId = value;
  }
  public resetMemberObjectId() {
    this._memberObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberObjectIdInput() {
    return this._memberObjectId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AdministrativeUnitMemberTimeouts | undefined; 
  private __timeoutsOutput = new AdministrativeUnitMemberTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AdministrativeUnitMemberTimeouts | undefined) {
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
      administrative_unit_object_id: cdktf.stringToTerraform(this._administrativeUnitObjectId),
      member_object_id: cdktf.stringToTerraform(this._memberObjectId),
      timeouts: administrativeUnitMemberTimeoutsToTerraform(this._timeouts),
    };
  }
}
