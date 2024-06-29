# `customDirectoryRole` Submodule <a name="`customDirectoryRole` Submodule" id="@cdktf/provider-azuread.customDirectoryRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomDirectoryRole <a name="CustomDirectoryRole" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role azuread_custom_directory_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRole(
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
  enabled: typing.Union[bool, IResolvable],
  permissions: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]],
  version: str,
  description: str = None,
  id: str = None,
  template_id: str = None,
  timeouts: CustomDirectoryRoleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the role is enabled for assignment. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.version">version</a></code> | <code>str</code> | The version of the role definition. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#id CustomDirectoryRole#id}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Custom template identifier that is typically used if one needs an identifier to be the same across different directories. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#display_name CustomDirectoryRole#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the role is enabled for assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#enabled CustomDirectoryRole#enabled}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#permissions CustomDirectoryRole#permissions}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.version"></a>

- *Type:* str

The version of the role definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#version CustomDirectoryRole#version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.description"></a>

- *Type:* str

The description of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#description CustomDirectoryRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#id CustomDirectoryRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.templateId"></a>

- *Type:* str

Custom template identifier that is typically used if one needs an identifier to be the same across different directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#template_id CustomDirectoryRole#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#timeouts CustomDirectoryRole#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#create CustomDirectoryRole#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#delete CustomDirectoryRole#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#read CustomDirectoryRole#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#update CustomDirectoryRole#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomDirectoryRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomDirectoryRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomDirectoryRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomDirectoryRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomDirectoryRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList">CustomDirectoryRolePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference">CustomDirectoryRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissions"></a>

```python
permissions: CustomDirectoryRolePermissionsList
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList">CustomDirectoryRolePermissionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeouts"></a>

```python
timeouts: CustomDirectoryRoleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference">CustomDirectoryRoleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CustomDirectoryRoleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomDirectoryRoleConfig <a name="CustomDirectoryRoleConfig" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  enabled: typing.Union[bool, IResolvable],
  permissions: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]],
  version: str,
  description: str = None,
  id: str = None,
  template_id: str = None,
  timeouts: CustomDirectoryRoleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the role is enabled for assignment. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.version">version</a></code> | <code>str</code> | The version of the role definition. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.description">description</a></code> | <code>str</code> | The description of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#id CustomDirectoryRole#id}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.templateId">template_id</a></code> | <code>str</code> | Custom template identifier that is typically used if one needs an identifier to be the same across different directories. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#display_name CustomDirectoryRole#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the role is enabled for assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#enabled CustomDirectoryRole#enabled}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#permissions CustomDirectoryRole#permissions}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the role definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#version CustomDirectoryRole#version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#description CustomDirectoryRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#id CustomDirectoryRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Custom template identifier that is typically used if one needs an identifier to be the same across different directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#template_id CustomDirectoryRole#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.timeouts"></a>

```python
timeouts: CustomDirectoryRoleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#timeouts CustomDirectoryRole#timeouts}

---

### CustomDirectoryRolePermissions <a name="CustomDirectoryRolePermissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRolePermissions(
  allowed_resource_actions: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.property.allowedResourceActions">allowed_resource_actions</a></code> | <code>typing.List[str]</code> | Set of tasks that can be performed on a resource. |

---

##### `allowed_resource_actions`<sup>Required</sup> <a name="allowed_resource_actions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.property.allowedResourceActions"></a>

```python
allowed_resource_actions: typing.List[str]
```

- *Type:* typing.List[str]

Set of tasks that can be performed on a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#allowed_resource_actions CustomDirectoryRole#allowed_resource_actions}

---

### CustomDirectoryRoleTimeouts <a name="CustomDirectoryRoleTimeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRoleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#create CustomDirectoryRole#create}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#delete CustomDirectoryRole#delete}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#read CustomDirectoryRole#read}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#update CustomDirectoryRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#create CustomDirectoryRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#delete CustomDirectoryRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#read CustomDirectoryRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/custom_directory_role#update CustomDirectoryRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomDirectoryRolePermissionsList <a name="CustomDirectoryRolePermissionsList" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRolePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomDirectoryRolePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CustomDirectoryRolePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]]

---


### CustomDirectoryRolePermissionsOutputReference <a name="CustomDirectoryRolePermissionsOutputReference" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRolePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActionsInput">allowed_resource_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActions">allowed_resource_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_resource_actions_input`<sup>Optional</sup> <a name="allowed_resource_actions_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActionsInput"></a>

```python
allowed_resource_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_resource_actions`<sup>Required</sup> <a name="allowed_resource_actions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActions"></a>

```python
allowed_resource_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomDirectoryRolePermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>]

---


### CustomDirectoryRoleTimeoutsOutputReference <a name="CustomDirectoryRoleTimeoutsOutputReference" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import custom_directory_role

customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomDirectoryRoleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>]

---



