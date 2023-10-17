# `azuread_service_principal_certificate`

Refer to the Terraform Registory for docs: [`azuread_service_principal_certificate`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate).

# `servicePrincipalCertificate` Submodule <a name="`servicePrincipalCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalCertificate <a name="ServicePrincipalCertificate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate azuread_service_principal_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

new servicePrincipalCertificate.ServicePrincipalCertificate(scope: Construct, id: string, config: ServicePrincipalCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative">resetEndDateRelative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicePrincipalCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetEndDateRelative` <a name="resetEndDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative"></a>

```typescript
public resetEndDateRelative(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicePrincipalCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput">endDateRelativeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative">endDateRelative</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a>

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `endDateRelativeInput`<sup>Optional</sup> <a name="endDateRelativeInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput"></a>

```typescript
public readonly endDateRelativeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicePrincipalCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endDateRelative`<sup>Required</sup> <a name="endDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalCertificateConfig <a name="ServicePrincipalCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

const servicePrincipalCertificateConfig: servicePrincipalCertificate.ServicePrincipalCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value">value</a></code> | <code>string</code> | The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding">encoding</a></code> | <code>string</code> | Specifies the encoding used for the supplied certificate data. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate">endDate</a></code> | <code>string</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative">endDateRelative</a></code> | <code>string</code> | A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId">keyId</a></code> | <code>string</code> | A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate">startDate</a></code> | <code>string</code> | The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type">type</a></code> | <code>string</code> | The type of key/certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#service_principal_id ServicePrincipalCertificate#service_principal_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#value ServicePrincipalCertificate#value}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#encoding ServicePrincipalCertificate#encoding}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#end_date ServicePrincipalCertificate#end_date}

---

##### `endDateRelative`<sup>Optional</sup> <a name="endDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* string

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#end_date_relative ServicePrincipalCertificate#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#key_id ServicePrincipalCertificate#key_id}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#start_date ServicePrincipalCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#timeouts ServicePrincipalCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of key/certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#type ServicePrincipalCertificate#type}

---

### ServicePrincipalCertificateTimeouts <a name="ServicePrincipalCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

const servicePrincipalCertificateTimeouts: servicePrincipalCertificate.ServicePrincipalCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#update ServicePrincipalCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/service_principal_certificate#update ServicePrincipalCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalCertificateTimeoutsOutputReference <a name="ServicePrincipalCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktf/provider-azuread'

new servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicePrincipalCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---



