# `azuread_application`

Refer to the Terraform Registory for docs: [`azuread_application`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application).

# `application` Submodule <a name="`application` Submodule" id="@cdktf/provider-azuread.application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Application <a name="Application" id="@cdktf/provider-azuread.application.Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application azuread_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.Application.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.Application(scope: Construct, id: string, config: ApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.application.Application.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.application.Application.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putApi">putApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putAppRole">putAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putFeatureTags">putFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putOptionalClaims">putOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPublicClient">putPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putRequiredResourceAccess">putRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putSinglePageApplication">putSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetAppRole">resetAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled">resetDeviceOnlyAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled">resetFallbackPublicClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFeatureTags">resetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims">resetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetIdentifierUris">resetIdentifierUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetLogoImage">resetLogoImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetMarketingUrl">resetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired">resetOauth2PostResponseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOptionalClaims">resetOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames">resetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl">resetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPublicClient">resetPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess">resetRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetServiceManagementReference">resetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSignInAudience">resetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSinglePageApplication">resetSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl">resetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.Application.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.application.Application.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.application.Application.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.application.Application.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.application.Application.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApi` <a name="putApi" id="@cdktf/provider-azuread.application.Application.putApi"></a>

```typescript
public putApi(value: ApplicationApi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putApi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `putAppRole` <a name="putAppRole" id="@cdktf/provider-azuread.application.Application.putAppRole"></a>

```typescript
public putAppRole(value: IResolvable | ApplicationAppRole[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putAppRole.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]

---

##### `putFeatureTags` <a name="putFeatureTags" id="@cdktf/provider-azuread.application.Application.putFeatureTags"></a>

```typescript
public putFeatureTags(value: IResolvable | ApplicationFeatureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putFeatureTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]

---

##### `putOptionalClaims` <a name="putOptionalClaims" id="@cdktf/provider-azuread.application.Application.putOptionalClaims"></a>

```typescript
public putOptionalClaims(value: ApplicationOptionalClaims): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `putPublicClient` <a name="putPublicClient" id="@cdktf/provider-azuread.application.Application.putPublicClient"></a>

```typescript
public putPublicClient(value: ApplicationPublicClient): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putPublicClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `putRequiredResourceAccess` <a name="putRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess"></a>

```typescript
public putRequiredResourceAccess(value: IResolvable | ApplicationRequiredResourceAccess[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]

---

##### `putSinglePageApplication` <a name="putSinglePageApplication" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication"></a>

```typescript
public putSinglePageApplication(value: ApplicationSinglePageApplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.application.Application.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `putWeb` <a name="putWeb" id="@cdktf/provider-azuread.application.Application.putWeb"></a>

```typescript
public putWeb(value: ApplicationWeb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `resetApi` <a name="resetApi" id="@cdktf/provider-azuread.application.Application.resetApi"></a>

```typescript
public resetApi(): void
```

##### `resetAppRole` <a name="resetAppRole" id="@cdktf/provider-azuread.application.Application.resetAppRole"></a>

```typescript
public resetAppRole(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.application.Application.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceOnlyAuthEnabled` <a name="resetDeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled"></a>

```typescript
public resetDeviceOnlyAuthEnabled(): void
```

##### `resetFallbackPublicClientEnabled` <a name="resetFallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled"></a>

```typescript
public resetFallbackPublicClientEnabled(): void
```

##### `resetFeatureTags` <a name="resetFeatureTags" id="@cdktf/provider-azuread.application.Application.resetFeatureTags"></a>

```typescript
public resetFeatureTags(): void
```

##### `resetGroupMembershipClaims` <a name="resetGroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims"></a>

```typescript
public resetGroupMembershipClaims(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.application.Application.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentifierUris` <a name="resetIdentifierUris" id="@cdktf/provider-azuread.application.Application.resetIdentifierUris"></a>

```typescript
public resetIdentifierUris(): void
```

##### `resetLogoImage` <a name="resetLogoImage" id="@cdktf/provider-azuread.application.Application.resetLogoImage"></a>

```typescript
public resetLogoImage(): void
```

##### `resetMarketingUrl` <a name="resetMarketingUrl" id="@cdktf/provider-azuread.application.Application.resetMarketingUrl"></a>

```typescript
public resetMarketingUrl(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azuread.application.Application.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetOauth2PostResponseRequired` <a name="resetOauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired"></a>

```typescript
public resetOauth2PostResponseRequired(): void
```

##### `resetOptionalClaims` <a name="resetOptionalClaims" id="@cdktf/provider-azuread.application.Application.resetOptionalClaims"></a>

```typescript
public resetOptionalClaims(): void
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.application.Application.resetOwners"></a>

```typescript
public resetOwners(): void
```

##### `resetPreventDuplicateNames` <a name="resetPreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames"></a>

```typescript
public resetPreventDuplicateNames(): void
```

##### `resetPrivacyStatementUrl` <a name="resetPrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl"></a>

```typescript
public resetPrivacyStatementUrl(): void
```

##### `resetPublicClient` <a name="resetPublicClient" id="@cdktf/provider-azuread.application.Application.resetPublicClient"></a>

```typescript
public resetPublicClient(): void
```

##### `resetRequiredResourceAccess` <a name="resetRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess"></a>

```typescript
public resetRequiredResourceAccess(): void
```

##### `resetServiceManagementReference` <a name="resetServiceManagementReference" id="@cdktf/provider-azuread.application.Application.resetServiceManagementReference"></a>

```typescript
public resetServiceManagementReference(): void
```

##### `resetSignInAudience` <a name="resetSignInAudience" id="@cdktf/provider-azuread.application.Application.resetSignInAudience"></a>

```typescript
public resetSignInAudience(): void
```

##### `resetSinglePageApplication` <a name="resetSinglePageApplication" id="@cdktf/provider-azuread.application.Application.resetSinglePageApplication"></a>

```typescript
public resetSinglePageApplication(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-azuread.application.Application.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azuread.application.Application.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-azuread.application.Application.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```

##### `resetTermsOfServiceUrl` <a name="resetTermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl"></a>

```typescript
public resetTermsOfServiceUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.application.Application.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeb` <a name="resetWeb" id="@cdktf/provider-azuread.application.Application.resetWeb"></a>

```typescript
public resetWeb(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.application.Application.isConstruct"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

application.Application.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.application.Application.isTerraformElement"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

application.Application.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.application.Application.isTerraformResource"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

application.Application.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRole">appRole</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleIds">appRoleIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft">disabledByMicrosoft</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTags">featureTags</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds">oauth2PermissionScopeIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaims">optionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClient">publicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publisherDomain">publisherDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccess">requiredResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplication">singlePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.apiInput">apiInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleInput">appRoleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput">deviceOnlyAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput">fallbackPublicClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTagsInput">featureTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput">groupMembershipClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUrisInput">identifierUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImageInput">logoImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrlInput">marketingUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput">oauth2PostResponseRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaimsInput">optionalClaimsInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput">preventDuplicateNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput">privacyStatementUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClientInput">publicClientInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput">requiredResourceAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput">serviceManagementReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudienceInput">signInAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput">singlePageApplicationInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput">termsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.webInput">webInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled">deviceOnlyAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled">fallbackPublicClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUris">identifierUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImage">logoImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrl">marketingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired">oauth2PostResponseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReference">serviceManagementReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudience">signInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.application.Application.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.application.Application.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.Application.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.application.Application.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.application.Application.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.application.Application.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.Application.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.Application.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.application.Application.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.application.Application.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.Application.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.Application.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-azuread.application.Application.property.api"></a>

```typescript
public readonly api: ApplicationApiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.application.Application.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `appRole`<sup>Required</sup> <a name="appRole" id="@cdktf/provider-azuread.application.Application.property.appRole"></a>

```typescript
public readonly appRole: ApplicationAppRoleList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a>

---

##### `appRoleIds`<sup>Required</sup> <a name="appRoleIds" id="@cdktf/provider-azuread.application.Application.property.appRoleIds"></a>

```typescript
public readonly appRoleIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="disabledByMicrosoft" id="@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft"></a>

```typescript
public readonly disabledByMicrosoft: string;
```

- *Type:* string

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktf/provider-azuread.application.Application.property.featureTags"></a>

```typescript
public readonly featureTags: ApplicationFeatureTagsList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-azuread.application.Application.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `oauth2PermissionScopeIds`<sup>Required</sup> <a name="oauth2PermissionScopeIds" id="@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds"></a>

```typescript
public readonly oauth2PermissionScopeIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.application.Application.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `optionalClaims`<sup>Required</sup> <a name="optionalClaims" id="@cdktf/provider-azuread.application.Application.property.optionalClaims"></a>

```typescript
public readonly optionalClaims: ApplicationOptionalClaimsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a>

---

##### `publicClient`<sup>Required</sup> <a name="publicClient" id="@cdktf/provider-azuread.application.Application.property.publicClient"></a>

```typescript
public readonly publicClient: ApplicationPublicClientOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a>

---

##### `publisherDomain`<sup>Required</sup> <a name="publisherDomain" id="@cdktf/provider-azuread.application.Application.property.publisherDomain"></a>

```typescript
public readonly publisherDomain: string;
```

- *Type:* string

---

##### `requiredResourceAccess`<sup>Required</sup> <a name="requiredResourceAccess" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccess"></a>

```typescript
public readonly requiredResourceAccess: ApplicationRequiredResourceAccessList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a>

---

##### `singlePageApplication`<sup>Required</sup> <a name="singlePageApplication" id="@cdktf/provider-azuread.application.Application.property.singlePageApplication"></a>

```typescript
public readonly singlePageApplication: ApplicationSinglePageApplicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.Application.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-azuread.application.Application.property.web"></a>

```typescript
public readonly web: ApplicationWebOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-azuread.application.Application.property.apiInput"></a>

```typescript
public readonly apiInput: ApplicationApi;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `appRoleInput`<sup>Optional</sup> <a name="appRoleInput" id="@cdktf/provider-azuread.application.Application.property.appRoleInput"></a>

```typescript
public readonly appRoleInput: IResolvable | ApplicationAppRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.application.Application.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceOnlyAuthEnabledInput`<sup>Optional</sup> <a name="deviceOnlyAuthEnabledInput" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput"></a>

```typescript
public readonly deviceOnlyAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.application.Application.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fallbackPublicClientEnabledInput`<sup>Optional</sup> <a name="fallbackPublicClientEnabledInput" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput"></a>

```typescript
public readonly fallbackPublicClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `featureTagsInput`<sup>Optional</sup> <a name="featureTagsInput" id="@cdktf/provider-azuread.application.Application.property.featureTagsInput"></a>

```typescript
public readonly featureTagsInput: IResolvable | ApplicationFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]

---

##### `groupMembershipClaimsInput`<sup>Optional</sup> <a name="groupMembershipClaimsInput" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput"></a>

```typescript
public readonly groupMembershipClaimsInput: string[];
```

- *Type:* string[]

---

##### `identifierUrisInput`<sup>Optional</sup> <a name="identifierUrisInput" id="@cdktf/provider-azuread.application.Application.property.identifierUrisInput"></a>

```typescript
public readonly identifierUrisInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.Application.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logoImageInput`<sup>Optional</sup> <a name="logoImageInput" id="@cdktf/provider-azuread.application.Application.property.logoImageInput"></a>

```typescript
public readonly logoImageInput: string;
```

- *Type:* string

---

##### `marketingUrlInput`<sup>Optional</sup> <a name="marketingUrlInput" id="@cdktf/provider-azuread.application.Application.property.marketingUrlInput"></a>

```typescript
public readonly marketingUrlInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azuread.application.Application.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `oauth2PostResponseRequiredInput`<sup>Optional</sup> <a name="oauth2PostResponseRequiredInput" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput"></a>

```typescript
public readonly oauth2PostResponseRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optionalClaimsInput`<sup>Optional</sup> <a name="optionalClaimsInput" id="@cdktf/provider-azuread.application.Application.property.optionalClaimsInput"></a>

```typescript
public readonly optionalClaimsInput: ApplicationOptionalClaims;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.application.Application.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="preventDuplicateNamesInput" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput"></a>

```typescript
public readonly preventDuplicateNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacyStatementUrlInput`<sup>Optional</sup> <a name="privacyStatementUrlInput" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput"></a>

```typescript
public readonly privacyStatementUrlInput: string;
```

- *Type:* string

---

##### `publicClientInput`<sup>Optional</sup> <a name="publicClientInput" id="@cdktf/provider-azuread.application.Application.property.publicClientInput"></a>

```typescript
public readonly publicClientInput: ApplicationPublicClient;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `requiredResourceAccessInput`<sup>Optional</sup> <a name="requiredResourceAccessInput" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput"></a>

```typescript
public readonly requiredResourceAccessInput: IResolvable | ApplicationRequiredResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]

---

##### `serviceManagementReferenceInput`<sup>Optional</sup> <a name="serviceManagementReferenceInput" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput"></a>

```typescript
public readonly serviceManagementReferenceInput: string;
```

- *Type:* string

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="signInAudienceInput" id="@cdktf/provider-azuread.application.Application.property.signInAudienceInput"></a>

```typescript
public readonly signInAudienceInput: string;
```

- *Type:* string

---

##### `singlePageApplicationInput`<sup>Optional</sup> <a name="singlePageApplicationInput" id="@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput"></a>

```typescript
public readonly singlePageApplicationInput: ApplicationSinglePageApplication;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-azuread.application.Application.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azuread.application.Application.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-azuread.application.Application.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="termsOfServiceUrlInput" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput"></a>

```typescript
public readonly termsOfServiceUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.application.Application.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktf/provider-azuread.application.Application.property.webInput"></a>

```typescript
public readonly webInput: ApplicationWeb;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.Application.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceOnlyAuthEnabled`<sup>Required</sup> <a name="deviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled"></a>

```typescript
public readonly deviceOnlyAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.Application.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fallbackPublicClientEnabled`<sup>Required</sup> <a name="fallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled"></a>

```typescript
public readonly fallbackPublicClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifierUris`<sup>Required</sup> <a name="identifierUris" id="@cdktf/provider-azuread.application.Application.property.identifierUris"></a>

```typescript
public readonly identifierUris: string[];
```

- *Type:* string[]

---

##### `logoImage`<sup>Required</sup> <a name="logoImage" id="@cdktf/provider-azuread.application.Application.property.logoImage"></a>

```typescript
public readonly logoImage: string;
```

- *Type:* string

---

##### `marketingUrl`<sup>Required</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.application.Application.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.application.Application.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `oauth2PostResponseRequired`<sup>Required</sup> <a name="oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired"></a>

```typescript
public readonly oauth2PostResponseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.application.Application.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* string

---

##### `serviceManagementReference`<sup>Required</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReference"></a>

```typescript
public readonly serviceManagementReference: string;
```

- *Type:* string

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.application.Application.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-azuread.application.Application.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.application.Application.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-azuread.application.Application.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.application.Application.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationApi <a name="ApplicationApi" id="@cdktf/provider-azuread.application.ApplicationApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApi.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationApi: application.ApplicationApi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications">knownClientApplications</a></code> | <code>string[]</code> | Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled">mappedClaimsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows an application to use claims mapping without specifying a custom signing key. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope">oauth2PermissionScope</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]</code> | oauth2_permission_scope block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>number</code> | The access token version expected by this resource. |

---

##### `knownClientApplications`<sup>Optional</sup> <a name="knownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications"></a>

```typescript
public readonly knownClientApplications: string[];
```

- *Type:* string[]

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#known_client_applications Application#known_client_applications}

---

##### `mappedClaimsEnabled`<sup>Optional</sup> <a name="mappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled"></a>

```typescript
public readonly mappedClaimsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `oauth2PermissionScope`<sup>Optional</sup> <a name="oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope"></a>

```typescript
public readonly oauth2PermissionScope: IResolvable | ApplicationApiOauth2PermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* number

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="ApplicationApiOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationApiOauth2PermissionScope: application.ApplicationApiOauth2PermissionScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id">id</a></code> | <code>string</code> | The unique identifier of the delegated permission. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription">adminConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the permission scope is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type">type</a></code> | <code>string</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription">userConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission that appears in the end user consent experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value">value</a></code> | <code>string</code> | The value that is used for the `scp` claim in OAuth 2.0 access tokens. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `adminConsentDescription`<sup>Optional</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* string

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#admin_consent_description Application#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Optional</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* string

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enabled Application#enabled}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* string

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#user_consent_description Application#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* string

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#user_consent_display_name Application#user_consent_display_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#value Application#value}

---

### ApplicationAppRole <a name="ApplicationAppRole" id="@cdktf/provider-azuread.application.ApplicationAppRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationAppRole.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationAppRole: application.ApplicationAppRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>string[]</code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.description">description</a></code> | <code>string</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName">displayName</a></code> | <code>string</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.id">id</a></code> | <code>string</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the app role is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.value">value</a></code> | <code>string</code> | The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal. |

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* string[]

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#allowed_member_types Application#allowed_member_types}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#description Application#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#display_name Application#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enabled Application#enabled}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#value Application#value}

---

### ApplicationConfig <a name="ApplicationConfig" id="@cdktf/provider-azuread.application.ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationConfig.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationConfig: application.ApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.appRole">appRole</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]</code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.description">description</a></code> | <code>string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled">deviceOnlyAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled">fallbackPublicClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags">featureTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>string[]</code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris">identifierUris</a></code> | <code>string[]</code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage">logoImage</a></code> | <code>string</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl">marketingUrl</a></code> | <code>string</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.notes">notes</a></code> | <code>string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired">oauth2PostResponseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims">optionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.owners">owners</a></code> | <code>string[]</code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>string</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient">publicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess">requiredResourceAccess</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]</code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference">serviceManagementReference</a></code> | <code>string</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience">signInAudience</a></code> | <code>string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication">singlePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.tags">tags</a></code> | <code>string[]</code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.templateId">templateId</a></code> | <code>string</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.ApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.ApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.application.ApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-azuread.application.ApplicationConfig.property.api"></a>

```typescript
public readonly api: ApplicationApi;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#api Application#api}

---

##### `appRole`<sup>Optional</sup> <a name="appRole" id="@cdktf/provider-azuread.application.ApplicationConfig.property.appRole"></a>

```typescript
public readonly appRole: IResolvable | ApplicationAppRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#app_role Application#app_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#description Application#description}

---

##### `deviceOnlyAuthEnabled`<sup>Optional</sup> <a name="deviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```typescript
public readonly deviceOnlyAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallbackPublicClientEnabled`<sup>Optional</sup> <a name="fallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```typescript
public readonly fallbackPublicClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags"></a>

```typescript
public readonly featureTags: IResolvable | ApplicationFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#feature_tags Application#feature_tags}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* string[]

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifierUris`<sup>Optional</sup> <a name="identifierUris" id="@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris"></a>

```typescript
public readonly identifierUris: string[];
```

- *Type:* string[]

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `logoImage`<sup>Optional</sup> <a name="logoImage" id="@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage"></a>

```typescript
public readonly logoImage: string;
```

- *Type:* string

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#logo_image Application#logo_image}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* string

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#marketing_url Application#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.application.ApplicationConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#notes Application#notes}

---

##### `oauth2PostResponseRequired`<sup>Optional</sup> <a name="oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```typescript
public readonly oauth2PostResponseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optionalClaims`<sup>Optional</sup> <a name="optionalClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims"></a>

```typescript
public readonly optionalClaims: ApplicationOptionalClaims;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#owners Application#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* string

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `publicClient`<sup>Optional</sup> <a name="publicClient" id="@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient"></a>

```typescript
public readonly publicClient: ApplicationPublicClient;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#public_client Application#public_client}

---

##### `requiredResourceAccess`<sup>Optional</sup> <a name="requiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess"></a>

```typescript
public readonly requiredResourceAccess: IResolvable | ApplicationRequiredResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference"></a>

```typescript
public readonly serviceManagementReference: string;
```

- *Type:* string

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `singlePageApplication`<sup>Optional</sup> <a name="singlePageApplication" id="@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication"></a>

```typescript
public readonly singlePageApplication: ApplicationSinglePageApplication;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#single_page_application Application#single_page_application}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#support_url Application#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#tags Application#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-azuread.application.ApplicationConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#template_id Application#template_id}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-azuread.application.ApplicationConfig.property.web"></a>

```typescript
public readonly web: ApplicationWeb;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#web Application#web}

---

### ApplicationFeatureTags <a name="ApplicationFeatureTags" id="@cdktf/provider-azuread.application.ApplicationFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationFeatureTags: application.ApplicationFeatureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn">customSingleSignOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application represents a custom SAML application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise">enterprise</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application represents an Enterprise Application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery">gallery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application represents a gallery application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide">hide</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application is invisible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOn`<sup>Optional</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn"></a>

```typescript
public readonly customSingleSignOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application represents a custom SAML application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise"></a>

```typescript
public readonly enterprise: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application represents an Enterprise Application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enterprise Application#enterprise}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery"></a>

```typescript
public readonly gallery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application represents a gallery application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#gallery Application#gallery}

---

##### `hide`<sup>Optional</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide"></a>

```typescript
public readonly hide: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#hide Application#hide}

---

### ApplicationOptionalClaims <a name="ApplicationOptionalClaims" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationOptionalClaims: application.ApplicationOptionalClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken">accessToken</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken">idToken</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token">saml2Token</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]</code> | saml2_token block. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken"></a>

```typescript
public readonly accessToken: IResolvable | ApplicationOptionalClaimsAccessToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#access_token Application#access_token}

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken"></a>

```typescript
public readonly idToken: IResolvable | ApplicationOptionalClaimsIdToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id_token Application#id_token}

---

##### `saml2Token`<sup>Optional</sup> <a name="saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token"></a>

```typescript
public readonly saml2Token: IResolvable | ApplicationOptionalClaimsSaml2Token[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="ApplicationOptionalClaimsAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationOptionalClaimsAccessToken: application.ApplicationOptionalClaimsAccessToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name">name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source">source</a></code> | <code>string</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="ApplicationOptionalClaimsIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationOptionalClaimsIdToken: application.ApplicationOptionalClaimsIdToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name">name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source">source</a></code> | <code>string</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="ApplicationOptionalClaimsSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationOptionalClaimsSaml2Token: application.ApplicationOptionalClaimsSaml2Token = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name">name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source">source</a></code> | <code>string</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationPublicClient <a name="ApplicationPublicClient" id="@cdktf/provider-azuread.application.ApplicationPublicClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPublicClient.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationPublicClient: application.ApplicationPublicClient = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="ApplicationRequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationRequiredResourceAccess: application.ApplicationRequiredResourceAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess">resourceAccess</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]</code> | resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId">resourceAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_app_id Application#resource_app_id}. |

---

##### `resourceAccess`<sup>Required</sup> <a name="resourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```typescript
public readonly resourceAccess: IResolvable | ApplicationRequiredResourceAccessResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]

resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_access Application#resource_access}

---

##### `resourceAppId`<sup>Required</sup> <a name="resourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```typescript
public readonly resourceAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="ApplicationRequiredResourceAccessResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationRequiredResourceAccessResourceAccess: application.ApplicationRequiredResourceAccessResourceAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}.

---

### ApplicationSinglePageApplication <a name="ApplicationSinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationSinglePageApplication: application.ApplicationSinglePageApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="ApplicationTimeouts" id="@cdktf/provider-azuread.application.ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationTimeouts.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationTimeouts: application.ApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#create Application#create}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#delete Application#delete}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#read Application#read}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#update Application#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#create Application#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#delete Application#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#read Application#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#update Application#update}.

---

### ApplicationWeb <a name="ApplicationWeb" id="@cdktf/provider-azuread.application.ApplicationWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWeb.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationWeb: application.ApplicationWeb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | Home page or landing page of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant">implicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | implicit_grant block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#homepage_url Application#homepage_url}

---

##### `implicitGrant`<sup>Optional</sup> <a name="implicitGrant" id="@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant"></a>

```typescript
public readonly implicitGrant: ApplicationWebImplicitGrant;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#implicit_grant Application#implicit_grant}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#logout_url Application#logout_url}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="ApplicationWebImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

const applicationWebImplicitGrant: application.ApplicationWebImplicitGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled">accessTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this web application can request an access token using OAuth 2.0 implicit flow. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled">idTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this web application can request an ID token using OAuth 2.0 implicit flow. |

---

##### `accessTokenIssuanceEnabled`<sup>Optional</sup> <a name="accessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```typescript
public readonly accessTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `idTokenIssuanceEnabled`<sup>Optional</sup> <a name="idTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```typescript
public readonly idTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationApiOauth2PermissionScopeList <a name="ApplicationApiOauth2PermissionScopeList" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationApiOauth2PermissionScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get"></a>

```typescript
public get(index: number): ApplicationApiOauth2PermissionScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationApiOauth2PermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]

---


### ApplicationApiOauth2PermissionScopeOutputReference <a name="ApplicationApiOauth2PermissionScopeOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationApiOauth2PermissionScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription">resetAdminConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName">resetAdminConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription">resetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName">resetUserConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminConsentDescription` <a name="resetAdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription"></a>

```typescript
public resetAdminConsentDescription(): void
```

##### `resetAdminConsentDisplayName` <a name="resetAdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName"></a>

```typescript
public resetAdminConsentDisplayName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserConsentDescription` <a name="resetUserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription"></a>

```typescript
public resetUserConsentDescription(): void
```

##### `resetUserConsentDisplayName` <a name="resetUserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName"></a>

```typescript
public resetUserConsentDisplayName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput">adminConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput">adminConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput">userConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput">userConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription">adminConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription">userConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminConsentDescriptionInput`<sup>Optional</sup> <a name="adminConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput"></a>

```typescript
public readonly adminConsentDescriptionInput: string;
```

- *Type:* string

---

##### `adminConsentDisplayNameInput`<sup>Optional</sup> <a name="adminConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput"></a>

```typescript
public readonly adminConsentDisplayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userConsentDescriptionInput`<sup>Optional</sup> <a name="userConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput"></a>

```typescript
public readonly userConsentDescriptionInput: string;
```

- *Type:* string

---

##### `userConsentDisplayNameInput`<sup>Optional</sup> <a name="userConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput"></a>

```typescript
public readonly userConsentDisplayNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* string

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* string

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationApiOauth2PermissionScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>

---


### ApplicationApiOutputReference <a name="ApplicationApiOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationApiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope">putOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications">resetKnownClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled">resetMappedClaimsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope">resetOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion">resetRequestedAccessTokenVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2PermissionScope` <a name="putOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope"></a>

```typescript
public putOauth2PermissionScope(value: IResolvable | ApplicationApiOauth2PermissionScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]

---

##### `resetKnownClientApplications` <a name="resetKnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications"></a>

```typescript
public resetKnownClientApplications(): void
```

##### `resetMappedClaimsEnabled` <a name="resetMappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled"></a>

```typescript
public resetMappedClaimsEnabled(): void
```

##### `resetOauth2PermissionScope` <a name="resetOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope"></a>

```typescript
public resetOauth2PermissionScope(): void
```

##### `resetRequestedAccessTokenVersion` <a name="resetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion"></a>

```typescript
public resetRequestedAccessTokenVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope">oauth2PermissionScope</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput">knownClientApplicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput">mappedClaimsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput">oauth2PermissionScopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput">requestedAccessTokenVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications">knownClientApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled">mappedClaimsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2PermissionScope`<sup>Required</sup> <a name="oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope"></a>

```typescript
public readonly oauth2PermissionScope: ApplicationApiOauth2PermissionScopeList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a>

---

##### `knownClientApplicationsInput`<sup>Optional</sup> <a name="knownClientApplicationsInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput"></a>

```typescript
public readonly knownClientApplicationsInput: string[];
```

- *Type:* string[]

---

##### `mappedClaimsEnabledInput`<sup>Optional</sup> <a name="mappedClaimsEnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput"></a>

```typescript
public readonly mappedClaimsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2PermissionScopeInput`<sup>Optional</sup> <a name="oauth2PermissionScopeInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput"></a>

```typescript
public readonly oauth2PermissionScopeInput: IResolvable | ApplicationApiOauth2PermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>[]

---

##### `requestedAccessTokenVersionInput`<sup>Optional</sup> <a name="requestedAccessTokenVersionInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput"></a>

```typescript
public readonly requestedAccessTokenVersionInput: number;
```

- *Type:* number

---

##### `knownClientApplications`<sup>Required</sup> <a name="knownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications"></a>

```typescript
public readonly knownClientApplications: string[];
```

- *Type:* string[]

---

##### `mappedClaimsEnabled`<sup>Required</sup> <a name="mappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled"></a>

```typescript
public readonly mappedClaimsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestedAccessTokenVersion`<sup>Required</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationApi;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---


### ApplicationAppRoleList <a name="ApplicationAppRoleList" id="@cdktf/provider-azuread.application.ApplicationAppRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationAppRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get"></a>

```typescript
public get(index: number): ApplicationAppRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationAppRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>[]

---


### ApplicationAppRoleOutputReference <a name="ApplicationAppRoleOutputReference" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationAppRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput">allowedMemberTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMemberTypesInput`<sup>Optional</sup> <a name="allowedMemberTypesInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput"></a>

```typescript
public readonly allowedMemberTypesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationAppRole;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>

---


### ApplicationFeatureTagsList <a name="ApplicationFeatureTagsList" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationFeatureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get"></a>

```typescript
public get(index: number): ApplicationFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>[]

---


### ApplicationFeatureTagsOutputReference <a name="ApplicationFeatureTagsOutputReference" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationFeatureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn">resetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery">resetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide">resetHide</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOn` <a name="resetCustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```typescript
public resetCustomSingleSignOn(): void
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise"></a>

```typescript
public resetEnterprise(): void
```

##### `resetGallery` <a name="resetGallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery"></a>

```typescript
public resetGallery(): void
```

##### `resetHide` <a name="resetHide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide"></a>

```typescript
public resetHide(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput">customSingleSignOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput">galleryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput">hideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn">customSingleSignOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide">hide</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSingleSignOnInput`<sup>Optional</sup> <a name="customSingleSignOnInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```typescript
public readonly customSingleSignOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput"></a>

```typescript
public readonly enterpriseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryInput`<sup>Optional</sup> <a name="galleryInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput"></a>

```typescript
public readonly galleryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideInput`<sup>Optional</sup> <a name="hideInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput"></a>

```typescript
public readonly hideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSingleSignOn`<sup>Required</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn"></a>

```typescript
public readonly customSingleSignOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise"></a>

```typescript
public readonly enterprise: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery"></a>

```typescript
public readonly gallery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide"></a>

```typescript
public readonly hide: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationFeatureTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>

---


### ApplicationOptionalClaimsAccessTokenList <a name="ApplicationOptionalClaimsAccessTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsAccessTokenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get"></a>

```typescript
public get(index: number): ApplicationOptionalClaimsAccessTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsAccessToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]

---


### ApplicationOptionalClaimsAccessTokenOutputReference <a name="ApplicationOptionalClaimsAccessTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsAccessTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential"></a>

```typescript
public resetEssential(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string[];
```

- *Type:* string[]

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput"></a>

```typescript
public readonly essentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsAccessToken;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>

---


### ApplicationOptionalClaimsIdTokenList <a name="ApplicationOptionalClaimsIdTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsIdTokenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get"></a>

```typescript
public get(index: number): ApplicationOptionalClaimsIdTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsIdToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]

---


### ApplicationOptionalClaimsIdTokenOutputReference <a name="ApplicationOptionalClaimsIdTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsIdTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential"></a>

```typescript
public resetEssential(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string[];
```

- *Type:* string[]

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput"></a>

```typescript
public readonly essentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsIdToken;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>

---


### ApplicationOptionalClaimsOutputReference <a name="ApplicationOptionalClaimsOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken">putAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken">putIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token">putSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token">resetSaml2Token</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessToken` <a name="putAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken"></a>

```typescript
public putAccessToken(value: IResolvable | ApplicationOptionalClaimsAccessToken[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]

---

##### `putIdToken` <a name="putIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken"></a>

```typescript
public putIdToken(value: IResolvable | ApplicationOptionalClaimsIdToken[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]

---

##### `putSaml2Token` <a name="putSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token"></a>

```typescript
public putSaml2Token(value: IResolvable | ApplicationOptionalClaimsSaml2Token[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]

---

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken"></a>

```typescript
public resetIdToken(): void
```

##### `resetSaml2Token` <a name="resetSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token"></a>

```typescript
public resetSaml2Token(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken">accessToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken">idToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token">saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput">saml2TokenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: ApplicationOptionalClaimsAccessTokenList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a>

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: ApplicationOptionalClaimsIdTokenList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a>

---

##### `saml2Token`<sup>Required</sup> <a name="saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token"></a>

```typescript
public readonly saml2Token: ApplicationOptionalClaimsSaml2TokenList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: IResolvable | ApplicationOptionalClaimsAccessToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>[]

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: IResolvable | ApplicationOptionalClaimsIdToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>[]

---

##### `saml2TokenInput`<sup>Optional</sup> <a name="saml2TokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput"></a>

```typescript
public readonly saml2TokenInput: IResolvable | ApplicationOptionalClaimsSaml2Token[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationOptionalClaims;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---


### ApplicationOptionalClaimsSaml2TokenList <a name="ApplicationOptionalClaimsSaml2TokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsSaml2TokenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get"></a>

```typescript
public get(index: number): ApplicationOptionalClaimsSaml2TokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsSaml2Token[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>[]

---


### ApplicationOptionalClaimsSaml2TokenOutputReference <a name="ApplicationOptionalClaimsSaml2TokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationOptionalClaimsSaml2TokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential"></a>

```typescript
public resetEssential(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential">essential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string[];
```

- *Type:* string[]

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput"></a>

```typescript
public readonly essentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* string[]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationOptionalClaimsSaml2Token;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>

---


### ApplicationPublicClientOutputReference <a name="ApplicationPublicClientOutputReference" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationPublicClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationPublicClient;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---


### ApplicationRequiredResourceAccessList <a name="ApplicationRequiredResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationRequiredResourceAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get"></a>

```typescript
public get(index: number): ApplicationRequiredResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRequiredResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>[]

---


### ApplicationRequiredResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationRequiredResourceAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess">putResourceAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceAccess` <a name="putResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess"></a>

```typescript
public putResourceAccess(value: IResolvable | ApplicationRequiredResourceAccessResourceAccess[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess">resourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput">resourceAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput">resourceAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId">resourceAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceAccess`<sup>Required</sup> <a name="resourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess"></a>

```typescript
public readonly resourceAccess: ApplicationRequiredResourceAccessResourceAccessList;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a>

---

##### `resourceAccessInput`<sup>Optional</sup> <a name="resourceAccessInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput"></a>

```typescript
public readonly resourceAccessInput: IResolvable | ApplicationRequiredResourceAccessResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]

---

##### `resourceAppIdInput`<sup>Optional</sup> <a name="resourceAppIdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput"></a>

```typescript
public readonly resourceAppIdInput: string;
```

- *Type:* string

---

##### `resourceAppId`<sup>Required</sup> <a name="resourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId"></a>

```typescript
public readonly resourceAppId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRequiredResourceAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>

---


### ApplicationRequiredResourceAccessResourceAccessList <a name="ApplicationRequiredResourceAccessResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationRequiredResourceAccessResourceAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get"></a>

```typescript
public get(index: number): ApplicationRequiredResourceAccessResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRequiredResourceAccessResourceAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>[]

---


### ApplicationRequiredResourceAccessResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationRequiredResourceAccessResourceAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRequiredResourceAccessResourceAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>

---


### ApplicationSinglePageApplicationOutputReference <a name="ApplicationSinglePageApplicationOutputReference" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationSinglePageApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationSinglePageApplication;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---


### ApplicationTimeoutsOutputReference <a name="ApplicationTimeoutsOutputReference" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---


### ApplicationWebImplicitGrantOutputReference <a name="ApplicationWebImplicitGrantOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationWebImplicitGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled">resetAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled">resetIdTokenIssuanceEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokenIssuanceEnabled` <a name="resetAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled"></a>

```typescript
public resetAccessTokenIssuanceEnabled(): void
```

##### `resetIdTokenIssuanceEnabled` <a name="resetIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled"></a>

```typescript
public resetIdTokenIssuanceEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput">accessTokenIssuanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput">idTokenIssuanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled">accessTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled">idTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="accessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput"></a>

```typescript
public readonly accessTokenIssuanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="idTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput"></a>

```typescript
public readonly idTokenIssuanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessTokenIssuanceEnabled`<sup>Required</sup> <a name="accessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled"></a>

```typescript
public readonly accessTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idTokenIssuanceEnabled`<sup>Required</sup> <a name="idTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled"></a>

```typescript
public readonly idTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationWebImplicitGrant;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---


### ApplicationWebOutputReference <a name="ApplicationWebOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer"></a>

```typescript
import { application } from '@cdktf/provider-azuread'

new application.ApplicationWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant">putImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant">resetImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImplicitGrant` <a name="putImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant"></a>

```typescript
public putImplicitGrant(value: ApplicationWebImplicitGrant): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl"></a>

```typescript
public resetHomepageUrl(): void
```

##### `resetImplicitGrant` <a name="resetImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant"></a>

```typescript
public resetImplicitGrant(): void
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl"></a>

```typescript
public resetLogoutUrl(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant">implicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput">homepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput">implicitGrantInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput">logoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `implicitGrant`<sup>Required</sup> <a name="implicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant"></a>

```typescript
public readonly implicitGrant: ApplicationWebImplicitGrantOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a>

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput"></a>

```typescript
public readonly homepageUrlInput: string;
```

- *Type:* string

---

##### `implicitGrantInput`<sup>Optional</sup> <a name="implicitGrantInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput"></a>

```typescript
public readonly implicitGrantInput: ApplicationWebImplicitGrant;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput"></a>

```typescript
public readonly logoutUrlInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationWeb;
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---



