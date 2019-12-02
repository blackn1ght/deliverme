FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
EXPOSE 4000

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["DeliverMe.ApiGateway.Api.csproj", "DeliverMe.ApiGateway.Api/"]
RUN dotnet restore "DeliverMe.ApiGateway.Api/DeliverMe.ApiGateway.Api.csproj"
COPY . ./DeliverMe.ApiGateway.Api/
WORKDIR /src/DeliverMe.ApiGateway.Api
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DeliverMe.ApiGateway.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DeliverMe.ApiGateway.Api.dll"]