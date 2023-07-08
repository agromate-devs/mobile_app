<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Temperatura</h1>
    </div>

    <!-- slider -->

<div class="container">
        <BlockTitle>Temperature</BlockTitle>
        <List simpleList strongIos outlineIos>
            <ListItem>
      <div>
        <Icon ios="f7:thermometer" md="material:thermometer" />
      </div>
      <div style="width: 100%; margin: 0 16px">
        <Range min={0} max={100} step={1} value={50} label={true} color="orange" />
      </div>
      <div>
        <Icon ios="f7:sun_max_fill" md="material:brightness_high" />
      </div>
    </ListItem>
        </List>

</div>

<div>
        <div>
            <List>
                <!-- Additional "checkbox" prop to enable checkbox list item -->
                <ListItem checkbox value="check_1" checked title="Notifica in caso di temperatura errata" />
            </List>
        </div>
</div>

<div>
    <div>
        <List>
            <ListButton title="Conferma" class="color-[white]" />
        </List>
    </div>
</div>

    
    
    
</Page>

<script>
    import { Navbar, Page, BlockTitle, Range, List, ListItem, Icon, ListButton, Block } from 'framework7-svelte';
</script>


<style>

    h1{
        color: white;
        font-size: 35px;
        margin: 0;
        position: relative;
        top: 50%;
        right: 10px;

    }
    .container-green{
        background-image: linear-gradient(to right,rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
        height: 180px;
        display: flex;
        align-items: left;
        
    }
    #freccia{
        width: 35px;
        height: 35px;
        position: relative;
        top: 15%;
        left: 25px;
    }
    
    
    

</style>

