# `dataAzureadGroupRoleManagementPolicy` Submodule <a name="`dataAzureadGroupRoleManagementPolicy` Submodule" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroupRoleManagementPolicy <a name="DataAzureadGroupRoleManagementPolicy" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy azuread_group_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  role_id: str,
  id: str = None,
  timeouts: DataAzureadGroupRoleManagementPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#id DataAzureadGroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.groupId"></a>

- *Type:* str

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#group_id DataAzureadGroupRoleManagementPolicy#group_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.roleId"></a>

- *Type:* str

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#role_id DataAzureadGroupRoleManagementPolicy#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#id DataAzureadGroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#timeouts DataAzureadGroupRoleManagementPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#read DataAzureadGroupRoleManagementPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadGroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadGroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadGroupRoleManagementPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadGroupRoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadGroupRoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference">DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.timeouts"></a>

```python
timeouts: DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference">DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadGroupRoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupRoleManagementPolicyConfig <a name="DataAzureadGroupRoleManagementPolicyConfig" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  role_id: str,
  id: str = None,
  timeouts: DataAzureadGroupRoleManagementPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.groupId">group_id</a></code> | <code>str</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.roleId">role_id</a></code> | <code>str</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#id DataAzureadGroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#group_id DataAzureadGroupRoleManagementPolicy#group_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#role_id DataAzureadGroupRoleManagementPolicy#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#id DataAzureadGroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzureadGroupRoleManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#timeouts DataAzureadGroupRoleManagementPolicy#timeouts}

---

### DataAzureadGroupRoleManagementPolicyTimeouts <a name="DataAzureadGroupRoleManagementPolicyTimeouts" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#read DataAzureadGroupRoleManagementPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group_role_management_policy#read DataAzureadGroupRoleManagementPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference <a name="DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group_role_management_policy

dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadGroupRoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroupRoleManagementPolicy.DataAzureadGroupRoleManagementPolicyTimeouts">DataAzureadGroupRoleManagementPolicyTimeouts</a>]

---



