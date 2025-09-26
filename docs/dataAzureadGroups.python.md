# `dataAzureadGroups` Submodule <a name="`dataAzureadGroups` Submodule" id="@cdktf/provider-azuread.dataAzureadGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroups <a name="DataAzureadGroups" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups azuread_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name_prefix: str = None,
  display_names: typing.List[str] = None,
  id: str = None,
  ignore_missing: typing.Union[bool, IResolvable] = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  object_ids: typing.List[str] = None,
  return_all: typing.Union[bool, IResolvable] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzureadGroupsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNamePrefix">display_name_prefix</a></code> | <code>str</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNames">display_names</a></code> | <code>typing.List[str]</code> | The display names of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.ignoreMissing">ignore_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.objectIds">object_ids</a></code> | <code>typing.List[str]</code> | The object IDs of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.returnAll">return_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name_prefix`<sup>Optional</sup> <a name="display_name_prefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNamePrefix"></a>

- *Type:* str

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `display_names`<sup>Optional</sup> <a name="display_names" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNames"></a>

- *Type:* typing.List[str]

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_missing`<sup>Optional</sup> <a name="ignore_missing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.ignoreMissing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.mailEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `object_ids`<sup>Optional</sup> <a name="object_ids" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.objectIds"></a>

- *Type:* typing.List[str]

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `return_all`<sup>Optional</sup> <a name="return_all" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.returnAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.securityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix">reset_display_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames">reset_display_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing">reset_ignore_missing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled">reset_mail_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds">reset_object_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll">reset_return_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled">reset_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#read DataAzureadGroups#read}.

---

##### `reset_display_name_prefix` <a name="reset_display_name_prefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix"></a>

```python
def reset_display_name_prefix() -> None
```

##### `reset_display_names` <a name="reset_display_names" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames"></a>

```python
def reset_display_names() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_missing` <a name="reset_ignore_missing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing"></a>

```python
def reset_ignore_missing() -> None
```

##### `reset_mail_enabled` <a name="reset_mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled"></a>

```python
def reset_mail_enabled() -> None
```

##### `reset_object_ids` <a name="reset_object_ids" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds"></a>

```python
def reset_object_ids() -> None
```

##### `reset_return_all` <a name="reset_return_all" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll"></a>

```python
def reset_return_all() -> None
```

##### `reset_security_enabled` <a name="reset_security_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled"></a>

```python
def reset_security_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput">display_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput">display_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput">ignore_missing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput">mail_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput">object_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput">return_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput">security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix">display_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames">display_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing">ignore_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds">object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll">return_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts"></a>

```python
timeouts: DataAzureadGroupsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a>

---

##### `display_name_prefix_input`<sup>Optional</sup> <a name="display_name_prefix_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput"></a>

```python
display_name_prefix_input: str
```

- *Type:* str

---

##### `display_names_input`<sup>Optional</sup> <a name="display_names_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput"></a>

```python
display_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_missing_input`<sup>Optional</sup> <a name="ignore_missing_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput"></a>

```python
ignore_missing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_enabled_input`<sup>Optional</sup> <a name="mail_enabled_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput"></a>

```python
mail_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_ids_input`<sup>Optional</sup> <a name="object_ids_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput"></a>

```python
object_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_all_input`<sup>Optional</sup> <a name="return_all_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput"></a>

```python
return_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_enabled_input`<sup>Optional</sup> <a name="security_enabled_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput"></a>

```python
security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadGroupsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>]

---

##### `display_name_prefix`<sup>Required</sup> <a name="display_name_prefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix"></a>

```python
display_name_prefix: str
```

- *Type:* str

---

##### `display_names`<sup>Required</sup> <a name="display_names" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames"></a>

```python
display_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_missing`<sup>Required</sup> <a name="ignore_missing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing"></a>

```python
ignore_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_enabled`<sup>Required</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_ids`<sup>Required</sup> <a name="object_ids" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds"></a>

```python
object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_all`<sup>Required</sup> <a name="return_all" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll"></a>

```python
return_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_enabled`<sup>Required</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupsConfig <a name="DataAzureadGroupsConfig" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name_prefix: str = None,
  display_names: typing.List[str] = None,
  id: str = None,
  ignore_missing: typing.Union[bool, IResolvable] = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  object_ids: typing.List[str] = None,
  return_all: typing.Union[bool, IResolvable] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzureadGroupsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix">display_name_prefix</a></code> | <code>str</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames">display_names</a></code> | <code>typing.List[str]</code> | The display names of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing">ignore_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds">object_ids</a></code> | <code>typing.List[str]</code> | The object IDs of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll">return_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name_prefix`<sup>Optional</sup> <a name="display_name_prefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix"></a>

```python
display_name_prefix: str
```

- *Type:* str

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `display_names`<sup>Optional</sup> <a name="display_names" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames"></a>

```python
display_names: typing.List[str]
```

- *Type:* typing.List[str]

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_missing`<sup>Optional</sup> <a name="ignore_missing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing"></a>

```python
ignore_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `object_ids`<sup>Optional</sup> <a name="object_ids" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds"></a>

```python
object_ids: typing.List[str]
```

- *Type:* typing.List[str]

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `return_all`<sup>Optional</sup> <a name="return_all" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll"></a>

```python
return_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts"></a>

```python
timeouts: DataAzureadGroupsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

### DataAzureadGroupsTimeouts <a name="DataAzureadGroupsTimeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroupsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#read DataAzureadGroups#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/groups#read DataAzureadGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupsTimeoutsOutputReference <a name="DataAzureadGroupsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_groups

dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadGroupsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>]

---



