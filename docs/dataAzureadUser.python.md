# `dataAzureadUser` Submodule <a name="`dataAzureadUser` Submodule" id="@cdktf/provider-azuread.dataAzureadUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUser <a name="DataAzureadUser" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  employee_id: str = None,
  id: str = None,
  mail: str = None,
  mail_nickname: str = None,
  object_id: str = None,
  timeouts: DataAzureadUserTimeouts = None,
  user_principal_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.employeeId">employee_id</a></code> | <code>str</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#id DataAzureadUser#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mail">mail</a></code> | <code>str</code> | The SMTP address for the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mailNickname">mail_nickname</a></code> | <code>str</code> | The email alias of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | The object ID of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.userPrincipalName">user_principal_name</a></code> | <code>str</code> | The user principal name (UPN) of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.employeeId"></a>

- *Type:* str

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#employee_id DataAzureadUser#employee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#id DataAzureadUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mail"></a>

- *Type:* str

The SMTP address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#mail DataAzureadUser#mail}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mailNickname"></a>

- *Type:* str

The email alias of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#mail_nickname DataAzureadUser#mail_nickname}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.objectId"></a>

- *Type:* str

The object ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#timeouts DataAzureadUser#timeouts}

---

##### `user_principal_name`<sup>Optional</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.userPrincipalName"></a>

- *Type:* str

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#user_principal_name DataAzureadUser#user_principal_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId">reset_employee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail">reset_mail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname">reset_mail_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName">reset_user_principal_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#read DataAzureadUser#read}.

---

##### `reset_employee_id` <a name="reset_employee_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId"></a>

```python
def reset_employee_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mail` <a name="reset_mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail"></a>

```python
def reset_mail() -> None
```

##### `reset_mail_nickname` <a name="reset_mail_nickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname"></a>

```python
def reset_mail_nickname() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_principal_name` <a name="reset_user_principal_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName"></a>

```python
def reset_user_principal_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled">account_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup">age_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones">business_phones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor">consent_provided_for_minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType">employee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState">external_user_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber">fax_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses">im_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId">manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation">office_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName">onpremises_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName">onpremises_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId">onpremises_immutable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName">onpremises_sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier">onpremises_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled">onpremises_sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName">onpremises_user_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails">other_mails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses">proxy_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList">show_in_address_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation">usage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput">employee_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput">mail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput">mail_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput">user_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId">employee_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail">mail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname">mail_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName">user_principal_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_enabled`<sup>Required</sup> <a name="account_enabled" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled"></a>

```python
account_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `age_group`<sup>Required</sup> <a name="age_group" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup"></a>

```python
age_group: str
```

- *Type:* str

---

##### `business_phones`<sup>Required</sup> <a name="business_phones" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones"></a>

```python
business_phones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `consent_provided_for_minor`<sup>Required</sup> <a name="consent_provided_for_minor" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor"></a>

```python
consent_provided_for_minor: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `employee_type`<sup>Required</sup> <a name="employee_type" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType"></a>

```python
employee_type: str
```

- *Type:* str

---

##### `external_user_state`<sup>Required</sup> <a name="external_user_state" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState"></a>

```python
external_user_state: str
```

- *Type:* str

---

##### `fax_number`<sup>Required</sup> <a name="fax_number" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `im_addresses`<sup>Required</sup> <a name="im_addresses" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses"></a>

```python
im_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `manager_id`<sup>Required</sup> <a name="manager_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `office_location`<sup>Required</sup> <a name="office_location" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation"></a>

```python
office_location: str
```

- *Type:* str

---

##### `onpremises_distinguished_name`<sup>Required</sup> <a name="onpremises_distinguished_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName"></a>

```python
onpremises_distinguished_name: str
```

- *Type:* str

---

##### `onpremises_domain_name`<sup>Required</sup> <a name="onpremises_domain_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName"></a>

```python
onpremises_domain_name: str
```

- *Type:* str

---

##### `onpremises_immutable_id`<sup>Required</sup> <a name="onpremises_immutable_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId"></a>

```python
onpremises_immutable_id: str
```

- *Type:* str

---

##### `onpremises_sam_account_name`<sup>Required</sup> <a name="onpremises_sam_account_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName"></a>

```python
onpremises_sam_account_name: str
```

- *Type:* str

---

##### `onpremises_security_identifier`<sup>Required</sup> <a name="onpremises_security_identifier" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier"></a>

```python
onpremises_security_identifier: str
```

- *Type:* str

---

##### `onpremises_sync_enabled`<sup>Required</sup> <a name="onpremises_sync_enabled" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled"></a>

```python
onpremises_sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `onpremises_user_principal_name`<sup>Required</sup> <a name="onpremises_user_principal_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName"></a>

```python
onpremises_user_principal_name: str
```

- *Type:* str

---

##### `other_mails`<sup>Required</sup> <a name="other_mails" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails"></a>

```python
other_mails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `proxy_addresses`<sup>Required</sup> <a name="proxy_addresses" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses"></a>

```python
proxy_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `show_in_address_list`<sup>Required</sup> <a name="show_in_address_list" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList"></a>

```python
show_in_address_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts"></a>

```python
timeouts: DataAzureadUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a>

---

##### `usage_location`<sup>Required</sup> <a name="usage_location" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation"></a>

```python
usage_location: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `employee_id_input`<sup>Optional</sup> <a name="employee_id_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput"></a>

```python
employee_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mail_input`<sup>Optional</sup> <a name="mail_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput"></a>

```python
mail_input: str
```

- *Type:* str

---

##### `mail_nickname_input`<sup>Optional</sup> <a name="mail_nickname_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput"></a>

```python
mail_nickname_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>]

---

##### `user_principal_name_input`<sup>Optional</sup> <a name="user_principal_name_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput"></a>

```python
user_principal_name_input: str
```

- *Type:* str

---

##### `employee_id`<sup>Required</sup> <a name="employee_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail"></a>

```python
mail: str
```

- *Type:* str

---

##### `mail_nickname`<sup>Required</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_principal_name`<sup>Required</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName"></a>

```python
user_principal_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUserConfig <a name="DataAzureadUserConfig" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  employee_id: str = None,
  id: str = None,
  mail: str = None,
  mail_nickname: str = None,
  object_id: str = None,
  timeouts: DataAzureadUserTimeouts = None,
  user_principal_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId">employee_id</a></code> | <code>str</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#id DataAzureadUser#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail">mail</a></code> | <code>str</code> | The SMTP address for the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname">mail_nickname</a></code> | <code>str</code> | The email alias of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName">user_principal_name</a></code> | <code>str</code> | The user principal name (UPN) of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#employee_id DataAzureadUser#employee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#id DataAzureadUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail"></a>

```python
mail: str
```

- *Type:* str

The SMTP address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#mail DataAzureadUser#mail}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

The email alias of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#mail_nickname DataAzureadUser#mail_nickname}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts"></a>

```python
timeouts: DataAzureadUserTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#timeouts DataAzureadUser#timeouts}

---

##### `user_principal_name`<sup>Optional</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName"></a>

```python
user_principal_name: str
```

- *Type:* str

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#user_principal_name DataAzureadUser#user_principal_name}

---

### DataAzureadUserTimeouts <a name="DataAzureadUserTimeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUserTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#read DataAzureadUser#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/data-sources/user#read DataAzureadUser#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUserTimeoutsOutputReference <a name="DataAzureadUserTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_user

dataAzureadUser.DataAzureadUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>]

---



