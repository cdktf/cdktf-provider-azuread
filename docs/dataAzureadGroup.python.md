# `dataAzureadGroup` Submodule <a name="`dataAzureadGroup` Submodule" id="@cdktf/provider-azuread.dataAzureadGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroup <a name="DataAzureadGroup" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  include_transitive_members: typing.Union[bool, IResolvable] = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  object_id: str = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzureadGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#id DataAzureadGroup#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.includeTransitiveMembers">include_transitive_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include transitive members (a flat list of all nested members). |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | The object ID of the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#display_name DataAzureadGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#id DataAzureadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_transitive_members`<sup>Optional</sup> <a name="include_transitive_members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.includeTransitiveMembers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include transitive members (a flat list of all nested members).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#include_transitive_members DataAzureadGroup#include_transitive_members}

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.mailEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#mail_enabled DataAzureadGroup#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.mailNickname"></a>

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#mail_nickname DataAzureadGroup#mail_nickname}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.objectId"></a>

- *Type:* str

The object ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#object_id DataAzureadGroup#object_id}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.securityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#security_enabled DataAzureadGroup#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#timeouts DataAzureadGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetIncludeTransitiveMembers">reset_include_transitive_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled">reset_mail_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailNickname">reset_mail_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled">reset_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#read DataAzureadGroup#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_transitive_members` <a name="reset_include_transitive_members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetIncludeTransitiveMembers"></a>

```python
def reset_include_transitive_members() -> None
```

##### `reset_mail_enabled` <a name="reset_mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled"></a>

```python
def reset_mail_enabled() -> None
```

##### `reset_mail_nickname` <a name="reset_mail_nickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailNickname"></a>

```python
def reset_mail_nickname() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_security_enabled` <a name="reset_security_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled"></a>

```python
def reset_security_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole">assignable_to_role</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed">external_senders_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists">hide_from_address_lists</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail">mail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName">onpremises_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName">onpremises_netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName">onpremises_sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier">onpremises_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled">onpremises_sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses">proxy_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled">writeback_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembersInput">include_transitive_members_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput">mail_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNicknameInput">mail_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput">security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembers">include_transitive_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname">mail_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assignable_to_role`<sup>Required</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole"></a>

```python
assignable_to_role: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_subscribe_new_members`<sup>Required</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers"></a>

```python
auto_subscribe_new_members: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dynamic_membership`<sup>Required</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership"></a>

```python
dynamic_membership: DataAzureadGroupDynamicMembershipList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a>

---

##### `external_senders_allowed`<sup>Required</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed"></a>

```python
external_senders_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide_from_address_lists`<sup>Required</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists"></a>

```python
hide_from_address_lists: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide_from_outlook_clients`<sup>Required</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients"></a>

```python
hide_from_outlook_clients: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail"></a>

```python
mail: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `onpremises_domain_name`<sup>Required</sup> <a name="onpremises_domain_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName"></a>

```python
onpremises_domain_name: str
```

- *Type:* str

---

##### `onpremises_group_type`<sup>Required</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType"></a>

```python
onpremises_group_type: str
```

- *Type:* str

---

##### `onpremises_netbios_name`<sup>Required</sup> <a name="onpremises_netbios_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName"></a>

```python
onpremises_netbios_name: str
```

- *Type:* str

---

##### `onpremises_sam_account_name`<sup>Required</sup> <a name="onpremises_sam_account_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName"></a>

```python
onpremises_sam_account_name: str
```

- *Type:* str

---

##### `onpremises_security_identifier`<sup>Required</sup> <a name="onpremises_security_identifier" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier"></a>

```python
onpremises_security_identifier: str
```

- *Type:* str

---

##### `onpremises_sync_enabled`<sup>Required</sup> <a name="onpremises_sync_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled"></a>

```python
onpremises_sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `provisioning_options`<sup>Required</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions"></a>

```python
provisioning_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proxy_addresses`<sup>Required</sup> <a name="proxy_addresses" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses"></a>

```python
proxy_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts"></a>

```python
timeouts: DataAzureadGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `writeback_enabled`<sup>Required</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled"></a>

```python
writeback_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_transitive_members_input`<sup>Optional</sup> <a name="include_transitive_members_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembersInput"></a>

```python
include_transitive_members_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_enabled_input`<sup>Optional</sup> <a name="mail_enabled_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput"></a>

```python
mail_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname_input`<sup>Optional</sup> <a name="mail_nickname_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNicknameInput"></a>

```python
mail_nickname_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `security_enabled_input`<sup>Optional</sup> <a name="security_enabled_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput"></a>

```python
security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_transitive_members`<sup>Required</sup> <a name="include_transitive_members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembers"></a>

```python
include_transitive_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_enabled`<sup>Required</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname`<sup>Required</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `security_enabled`<sup>Required</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupConfig <a name="DataAzureadGroupConfig" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  include_transitive_members: typing.Union[bool, IResolvable] = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  object_id: str = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzureadGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#id DataAzureadGroup#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.includeTransitiveMembers">include_transitive_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include transitive members (a flat list of all nested members). |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#display_name DataAzureadGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#id DataAzureadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_transitive_members`<sup>Optional</sup> <a name="include_transitive_members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.includeTransitiveMembers"></a>

```python
include_transitive_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include transitive members (a flat list of all nested members).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#include_transitive_members DataAzureadGroup#include_transitive_members}

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#mail_enabled DataAzureadGroup#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#mail_nickname DataAzureadGroup#mail_nickname}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#object_id DataAzureadGroup#object_id}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#security_enabled DataAzureadGroup#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts"></a>

```python
timeouts: DataAzureadGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#timeouts DataAzureadGroup#timeouts}

---

### DataAzureadGroupDynamicMembership <a name="DataAzureadGroupDynamicMembership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupDynamicMembership()
```


### DataAzureadGroupTimeouts <a name="DataAzureadGroupTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#read DataAzureadGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/group#read DataAzureadGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupDynamicMembershipList <a name="DataAzureadGroupDynamicMembershipList" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupDynamicMembershipList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadGroupDynamicMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadGroupDynamicMembershipOutputReference <a name="DataAzureadGroupDynamicMembershipOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadGroupDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a>

---


### DataAzureadGroupTimeoutsOutputReference <a name="DataAzureadGroupTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_group

dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>]

---



