# `servicePrincipalTokenSigningCertificate` Submodule <a name="`servicePrincipalTokenSigningCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalTokenSigningCertificate <a name="ServicePrincipalTokenSigningCertificate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate azuread_service_principal_token_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.NewServicePrincipalTokenSigningCertificate(scope Construct, id *string, config ServicePrincipalTokenSigningCertificateConfig) ServicePrincipalTokenSigningCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig">ServicePrincipalTokenSigningCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig">ServicePrincipalTokenSigningCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts"></a>

```go
func PutTimeouts(value ServicePrincipalTokenSigningCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipalTokenSigningCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipalTokenSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalTokenSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts"></a>

```go
func Timeouts() ServicePrincipalTokenSigningCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalTokenSigningCertificateConfig <a name="ServicePrincipalTokenSigningCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

&serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServicePrincipalId: *string,
	DisplayName: *string,
	EndDate: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate">EndDate</a></code> | <code>*string</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts"></a>

```go
Timeouts ServicePrincipalTokenSigningCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

### ServicePrincipalTokenSigningCertificateTimeouts <a name="ServicePrincipalTokenSigningCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

&serviceprincipaltokensigningcertificate.ServicePrincipalTokenSigningCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#update ServicePrincipalTokenSigningCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/service_principal_token_signing_certificate#update ServicePrincipalTokenSigningCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalTokenSigningCertificateTimeoutsOutputReference <a name="ServicePrincipalTokenSigningCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipaltokensigningcertificate"

serviceprincipaltokensigningcertificate.NewServicePrincipalTokenSigningCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalTokenSigningCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



