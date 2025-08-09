# `applicationOptionalClaims` Submodule <a name="`applicationOptionalClaims` Submodule" id="@cdktf/provider-azuread.applicationOptionalClaims"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationOptionalClaimsA <a name="ApplicationOptionalClaimsA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims azuread_application_optional_claims}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]] = None,
  id: str = None,
  id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]] = None,
  saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]] = None,
  timeouts: ApplicationOptionalClaimsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.accessToken">access_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.idToken">id_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.saml2Token">saml2_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]</code> | saml2_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.applicationId"></a>

- *Type:* str

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.accessToken"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_token`<sup>Optional</sup> <a name="id_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.idToken"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `saml2_token`<sup>Optional</sup> <a name="saml2_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.saml2Token"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken">put_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken">put_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token">put_saml2_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken">reset_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token">reset_saml2_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_token` <a name="put_access_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken"></a>

```python
def put_access_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]

---

##### `put_id_token` <a name="put_id_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken"></a>

```python
def put_id_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]

---

##### `put_saml2_token` <a name="put_saml2_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token"></a>

```python
def put_saml2_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}.

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_id_token` <a name="reset_id_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken"></a>

```python
def reset_id_token() -> None
```

##### `reset_saml2_token` <a name="reset_saml2_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token"></a>

```python
def reset_saml2_token() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationOptionalClaimsA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationOptionalClaimsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationOptionalClaimsA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationOptionalClaimsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationOptionalClaimsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken">access_token</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken">id_token</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token">saml2_token</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput">access_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput">id_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput">saml2_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken"></a>

```python
access_token: ApplicationOptionalClaimsAccessTokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a>

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken"></a>

```python
id_token: ApplicationOptionalClaimsIdTokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a>

---

##### `saml2_token`<sup>Required</sup> <a name="saml2_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token"></a>

```python
saml2_token: ApplicationOptionalClaimsSaml2TokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts"></a>

```python
timeouts: ApplicationOptionalClaimsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput"></a>

```python
access_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id_token_input`<sup>Optional</sup> <a name="id_token_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput"></a>

```python
id_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]

---

##### `saml2_token_input`<sup>Optional</sup> <a name="saml2_token_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput"></a>

```python
saml2_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationOptionalClaimsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationOptionalClaimsAccessTokenA <a name="ApplicationOptionalClaimsAccessTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsAConfig <a name="ApplicationOptionalClaimsAConfig" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]] = None,
  id: str = None,
  id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]] = None,
  saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]] = None,
  timeouts: ApplicationOptionalClaimsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken">access_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken">id_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token">saml2_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]</code> | saml2_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken"></a>

```python
access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_token`<sup>Optional</sup> <a name="id_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken"></a>

```python
id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `saml2_token`<sup>Optional</sup> <a name="saml2_token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token"></a>

```python
saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts"></a>

```python
timeouts: ApplicationOptionalClaimsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

### ApplicationOptionalClaimsIdTokenA <a name="ApplicationOptionalClaimsIdTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsSaml2TokenA <a name="ApplicationOptionalClaimsSaml2TokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsTimeouts <a name="ApplicationOptionalClaimsTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationOptionalClaimsAccessTokenAList <a name="ApplicationOptionalClaimsAccessTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsAccessTokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]]

---


### ApplicationOptionalClaimsAccessTokenAOutputReference <a name="ApplicationOptionalClaimsAccessTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsAccessTokenA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>]

---


### ApplicationOptionalClaimsIdTokenAList <a name="ApplicationOptionalClaimsIdTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsIdTokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdTokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]]

---


### ApplicationOptionalClaimsIdTokenAOutputReference <a name="ApplicationOptionalClaimsIdTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsIdTokenA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>]

---


### ApplicationOptionalClaimsSaml2TokenAList <a name="ApplicationOptionalClaimsSaml2TokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsSaml2TokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2TokenA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]]

---


### ApplicationOptionalClaimsSaml2TokenAOutputReference <a name="ApplicationOptionalClaimsSaml2TokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsSaml2TokenA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>]

---


### ApplicationOptionalClaimsTimeoutsOutputReference <a name="ApplicationOptionalClaimsTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_optional_claims

applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>]

---



