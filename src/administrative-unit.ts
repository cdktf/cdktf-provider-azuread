// https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdministrativeUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#description AdministrativeUnit#description}
  */
  readonly description?: string;
  /**
  * The display name for the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#display_name AdministrativeUnit#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the administrative unit and its members are hidden or publicly viewable in the directory
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#hidden_membership_enabled AdministrativeUnit#hidden_membership_enabled}
  */
  readonly hiddenMembershipEnabled?: boolean | cdktf.IResolvable;
  /**
  * A set of object IDs of members who should be present in this administrative unit. Supported object types are Users or Groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#members AdministrativeUnit#members}
  */
  readonly members?: string[];
  /**
  * If `true`, will return an error if an existing administrative unit is found with the same name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#prevent_duplicate_names AdministrativeUnit#prevent_duplicate_names}
  */
  readonly preventDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#timeouts AdministrativeUnit#timeouts}
  */
  readonly timeouts?: AdministrativeUnitTimeouts;
}
export interface AdministrativeUnitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#create AdministrativeUnit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#delete AdministrativeUnit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#read AdministrativeUnit#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html#update AdministrativeUnit#update}
  */
  readonly update?: string;
}

function administrativeUnitTimeoutsToTerraform(struct?: AdministrativeUnitTimeoutsOutputReference | AdministrativeUnitTimeouts): any {
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

export class AdministrativeUnitTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html azuread_administrative_unit}
*/
export class AdministrativeUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_administrative_unit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit.html azuread_administrative_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministrativeUnitConfig
  */
  public constructor(scope: Construct, id: string, config: AdministrativeUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_administrative_unit',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._hiddenMembershipEnabled = config.hiddenMembershipEnabled;
    this._members = config.members;
    this._preventDuplicateNames = config.preventDuplicateNames;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // hidden_membership_enabled - computed: false, optional: true, required: false
  private _hiddenMembershipEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get hiddenMembershipEnabled() {
    return this.getBooleanAttribute('hidden_membership_enabled') as any;
  }
  public set hiddenMembershipEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._hiddenMembershipEnabled = value;
  }
  public resetHiddenMembershipEnabled() {
    this._hiddenMembershipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenMembershipEnabledInput() {
    return this._hiddenMembershipEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[] | undefined; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[] | undefined) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // prevent_duplicate_names - computed: false, optional: true, required: false
  private _preventDuplicateNames?: boolean | cdktf.IResolvable | undefined; 
  public get preventDuplicateNames() {
    return this.getBooleanAttribute('prevent_duplicate_names') as any;
  }
  public set preventDuplicateNames(value: boolean | cdktf.IResolvable | undefined) {
    this._preventDuplicateNames = value;
  }
  public resetPreventDuplicateNames() {
    this._preventDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDuplicateNamesInput() {
    return this._preventDuplicateNames
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AdministrativeUnitTimeouts | undefined; 
  private __timeoutsOutput = new AdministrativeUnitTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AdministrativeUnitTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      hidden_membership_enabled: cdktf.booleanToTerraform(this._hiddenMembershipEnabled),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      prevent_duplicate_names: cdktf.booleanToTerraform(this._preventDuplicateNames),
      timeouts: administrativeUnitTimeoutsToTerraform(this._timeouts),
    };
  }
}
