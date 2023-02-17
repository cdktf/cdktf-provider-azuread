// https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdministrativeUnitMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#administrative_unit_object_id AdministrativeUnitMember#administrative_unit_object_id}
  */
  readonly administrativeUnitObjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#id AdministrativeUnitMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The object ID of the member
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#member_object_id AdministrativeUnitMember#member_object_id}
  */
  readonly memberObjectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#timeouts AdministrativeUnitMember#timeouts}
  */
  readonly timeouts?: AdministrativeUnitMemberTimeouts;
}
export interface AdministrativeUnitMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#create AdministrativeUnitMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#delete AdministrativeUnitMember#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#read AdministrativeUnitMember#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member#update AdministrativeUnitMember#update}
  */
  readonly update?: string;
}

export function administrativeUnitMemberTimeoutsToTerraform(struct?: AdministrativeUnitMemberTimeoutsOutputReference | AdministrativeUnitMemberTimeouts | cdktf.IResolvable): any {
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

export class AdministrativeUnitMemberTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdministrativeUnitMemberTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdministrativeUnitMemberTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member azuread_administrative_unit_member}
*/
export class AdministrativeUnitMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_administrative_unit_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_member azuread_administrative_unit_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministrativeUnitMemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdministrativeUnitMemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_administrative_unit_member',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.34.0',
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
    this._administrativeUnitObjectId = config.administrativeUnitObjectId;
    this._id = config.id;
    this._memberObjectId = config.memberObjectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative_unit_object_id - computed: false, optional: true, required: false
  private _administrativeUnitObjectId?: string; 
  public get administrativeUnitObjectId() {
    return this.getStringAttribute('administrative_unit_object_id');
  }
  public set administrativeUnitObjectId(value: string) {
    this._administrativeUnitObjectId = value;
  }
  public resetAdministrativeUnitObjectId() {
    this._administrativeUnitObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeUnitObjectIdInput() {
    return this._administrativeUnitObjectId;
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

  // member_object_id - computed: false, optional: true, required: false
  private _memberObjectId?: string; 
  public get memberObjectId() {
    return this.getStringAttribute('member_object_id');
  }
  public set memberObjectId(value: string) {
    this._memberObjectId = value;
  }
  public resetMemberObjectId() {
    this._memberObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberObjectIdInput() {
    return this._memberObjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdministrativeUnitMemberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdministrativeUnitMemberTimeouts) {
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
      administrative_unit_object_id: cdktf.stringToTerraform(this._administrativeUnitObjectId),
      id: cdktf.stringToTerraform(this._id),
      member_object_id: cdktf.stringToTerraform(this._memberObjectId),
      timeouts: administrativeUnitMemberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
