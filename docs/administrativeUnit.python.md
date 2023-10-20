# `azuread_administrative_unit`

Refer to the Terraform Registory for docs: [`azuread_administrative_unit`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit).

# `administrativeUnit` Submodule <a name="`administrativeUnit` Submodule" id="@cdktf/provider-azuread.administrativeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnit <a name="AdministrativeUnit" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit azuread_administrative_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  description: str = None,
  hidden_membership_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  members: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  timeouts: AdministrativeUnitTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.hiddenMembershipEnabled">hidden_membership_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the administrative unit and its members are hidden or publicly viewable in the directory. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#id AdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | A set of object IDs of members who should be present in this administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing administrative unit is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#display_name AdministrativeUnit#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.description"></a>

- *Type:* str

The description for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#description AdministrativeUnit#description}

---

##### `hidden_membership_enabled`<sup>Optional</sup> <a name="hidden_membership_enabled" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.hiddenMembershipEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the administrative unit and its members are hidden or publicly viewable in the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#hidden_membership_enabled AdministrativeUnit#hidden_membership_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#id AdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

A set of object IDs of members who should be present in this administrative unit.

Supported object types are Users or Groups

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#members AdministrativeUnit#members}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing administrative unit is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#prevent_duplicate_names AdministrativeUnit#prevent_duplicate_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#timeouts AdministrativeUnit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetHiddenMembershipEnabled">reset_hidden_membership_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetPreventDuplicateNames">reset_prevent_duplicate_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#create AdministrativeUnit#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#delete AdministrativeUnit#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#read AdministrativeUnit#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#update AdministrativeUnit#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hidden_membership_enabled` <a name="reset_hidden_membership_enabled" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetHiddenMembershipEnabled"></a>

```python
def reset_hidden_membership_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_prevent_duplicate_names` <a name="reset_prevent_duplicate_names" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetPreventDuplicateNames"></a>

```python
def reset_prevent_duplicate_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AdministrativeUnit resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnit.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AdministrativeUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AdministrativeUnit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AdministrativeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdministrativeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference">AdministrativeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.hiddenMembershipEnabledInput">hidden_membership_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.preventDuplicateNamesInput">prevent_duplicate_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.hiddenMembershipEnabled">hidden_membership_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.timeouts"></a>

```python
timeouts: AdministrativeUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference">AdministrativeUnitTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hidden_membership_enabled_input`<sup>Optional</sup> <a name="hidden_membership_enabled_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.hiddenMembershipEnabledInput"></a>

```python
hidden_membership_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names_input`<sup>Optional</sup> <a name="prevent_duplicate_names_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.preventDuplicateNamesInput"></a>

```python
prevent_duplicate_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AdministrativeUnitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `hidden_membership_enabled`<sup>Required</sup> <a name="hidden_membership_enabled" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.hiddenMembershipEnabled"></a>

```python
hidden_membership_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names`<sup>Required</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitConfig <a name="AdministrativeUnitConfig" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  description: str = None,
  hidden_membership_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  members: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  timeouts: AdministrativeUnitTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.description">description</a></code> | <code>str</code> | The description for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.hiddenMembershipEnabled">hidden_membership_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the administrative unit and its members are hidden or publicly viewable in the directory. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#id AdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.members">members</a></code> | <code>typing.List[str]</code> | A set of object IDs of members who should be present in this administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing administrative unit is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#display_name AdministrativeUnit#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#description AdministrativeUnit#description}

---

##### `hidden_membership_enabled`<sup>Optional</sup> <a name="hidden_membership_enabled" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.hiddenMembershipEnabled"></a>

```python
hidden_membership_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the administrative unit and its members are hidden or publicly viewable in the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#hidden_membership_enabled AdministrativeUnit#hidden_membership_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#id AdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

A set of object IDs of members who should be present in this administrative unit.

Supported object types are Users or Groups

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#members AdministrativeUnit#members}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing administrative unit is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#prevent_duplicate_names AdministrativeUnit#prevent_duplicate_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitConfig.property.timeouts"></a>

```python
timeouts: AdministrativeUnitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#timeouts AdministrativeUnit#timeouts}

---

### AdministrativeUnitTimeouts <a name="AdministrativeUnitTimeouts" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnitTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#create AdministrativeUnit#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#delete AdministrativeUnit#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#read AdministrativeUnit#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#update AdministrativeUnit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#create AdministrativeUnit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#delete AdministrativeUnit#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#read AdministrativeUnit#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit#update AdministrativeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitTimeoutsOutputReference <a name="AdministrativeUnitTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit

administrativeUnit.AdministrativeUnitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AdministrativeUnitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.administrativeUnit.AdministrativeUnitTimeouts">AdministrativeUnitTimeouts</a>]

---



