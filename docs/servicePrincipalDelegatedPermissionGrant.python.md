# `servicePrincipalDelegatedPermissionGrant` Submodule <a name="`servicePrincipalDelegatedPermissionGrant` Submodule" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalDelegatedPermissionGrant <a name="ServicePrincipalDelegatedPermissionGrant" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  claim_values: typing.List[str],
  resource_service_principal_object_id: str,
  service_principal_object_id: str,
  id: str = None,
  timeouts: ServicePrincipalDelegatedPermissionGrantTimeouts = None,
  user_object_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.claimValues">claim_values</a></code> | <code>typing.List[str]</code> | A set of claim values for delegated permission scopes which should be included in access tokens for the resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.resourceServicePrincipalObjectId">resource_service_principal_object_id</a></code> | <code>str</code> | The object ID of the service principal representing the resource to be accessed. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.servicePrincipalObjectId">service_principal_object_id</a></code> | <code>str</code> | The object ID of the service principal for which this delegated permission grant should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.userObjectId">user_object_id</a></code> | <code>str</code> | The object ID of the user on behalf of whom the service principal is authorized to access the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claim_values`<sup>Required</sup> <a name="claim_values" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.claimValues"></a>

- *Type:* typing.List[str]

A set of claim values for delegated permission scopes which should be included in access tokens for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}

---

##### `resource_service_principal_object_id`<sup>Required</sup> <a name="resource_service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.resourceServicePrincipalObjectId"></a>

- *Type:* str

The object ID of the service principal representing the resource to be accessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}

---

##### `service_principal_object_id`<sup>Required</sup> <a name="service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.servicePrincipalObjectId"></a>

- *Type:* str

The object ID of the service principal for which this delegated permission grant should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}

---

##### `user_object_id`<sup>Optional</sup> <a name="user_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.userObjectId"></a>

- *Type:* str

The object ID of the user on behalf of whom the service principal is authorized to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId">reset_user_object_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_object_id` <a name="reset_user_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId"></a>

```python
def reset_user_object_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicePrincipalDelegatedPermissionGrant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicePrincipalDelegatedPermissionGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipalDelegatedPermissionGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipalDelegatedPermissionGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalDelegatedPermissionGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput">claim_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput">resource_service_principal_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput">service_principal_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput">user_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues">claim_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId">resource_service_principal_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId">service_principal_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId">user_object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts"></a>

```python
timeouts: ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a>

---

##### `claim_values_input`<sup>Optional</sup> <a name="claim_values_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput"></a>

```python
claim_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_service_principal_object_id_input`<sup>Optional</sup> <a name="resource_service_principal_object_id_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput"></a>

```python
resource_service_principal_object_id_input: str
```

- *Type:* str

---

##### `service_principal_object_id_input`<sup>Optional</sup> <a name="service_principal_object_id_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput"></a>

```python
service_principal_object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicePrincipalDelegatedPermissionGrantTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>]

---

##### `user_object_id_input`<sup>Optional</sup> <a name="user_object_id_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput"></a>

```python
user_object_id_input: str
```

- *Type:* str

---

##### `claim_values`<sup>Required</sup> <a name="claim_values" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues"></a>

```python
claim_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_service_principal_object_id`<sup>Required</sup> <a name="resource_service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId"></a>

```python
resource_service_principal_object_id: str
```

- *Type:* str

---

##### `service_principal_object_id`<sup>Required</sup> <a name="service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId"></a>

```python
service_principal_object_id: str
```

- *Type:* str

---

##### `user_object_id`<sup>Required</sup> <a name="user_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId"></a>

```python
user_object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalDelegatedPermissionGrantConfig <a name="ServicePrincipalDelegatedPermissionGrantConfig" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  claim_values: typing.List[str],
  resource_service_principal_object_id: str,
  service_principal_object_id: str,
  id: str = None,
  timeouts: ServicePrincipalDelegatedPermissionGrantTimeouts = None,
  user_object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues">claim_values</a></code> | <code>typing.List[str]</code> | A set of claim values for delegated permission scopes which should be included in access tokens for the resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId">resource_service_principal_object_id</a></code> | <code>str</code> | The object ID of the service principal representing the resource to be accessed. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId">service_principal_object_id</a></code> | <code>str</code> | The object ID of the service principal for which this delegated permission grant should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId">user_object_id</a></code> | <code>str</code> | The object ID of the user on behalf of whom the service principal is authorized to access the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claim_values`<sup>Required</sup> <a name="claim_values" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues"></a>

```python
claim_values: typing.List[str]
```

- *Type:* typing.List[str]

A set of claim values for delegated permission scopes which should be included in access tokens for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}

---

##### `resource_service_principal_object_id`<sup>Required</sup> <a name="resource_service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId"></a>

```python
resource_service_principal_object_id: str
```

- *Type:* str

The object ID of the service principal representing the resource to be accessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}

---

##### `service_principal_object_id`<sup>Required</sup> <a name="service_principal_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId"></a>

```python
service_principal_object_id: str
```

- *Type:* str

The object ID of the service principal for which this delegated permission grant should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts"></a>

```python
timeouts: ServicePrincipalDelegatedPermissionGrantTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}

---

##### `user_object_id`<sup>Optional</sup> <a name="user_object_id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId"></a>

```python
user_object_id: str
```

- *Type:* str

The object ID of the user on behalf of whom the service principal is authorized to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}

---

### ServicePrincipalDelegatedPermissionGrantTimeouts <a name="ServicePrincipalDelegatedPermissionGrantTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference <a name="ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_delegated_permission_grant

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicePrincipalDelegatedPermissionGrantTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>]

---



