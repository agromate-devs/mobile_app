<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Temperatura</h1>
    </div>

    <!-- slider -->

    <div class="container">
        <BlockTitle>Volume</BlockTitle>
        <List simpleList strongIos outlineIos>
            <ListItem>
                <div>
                    <Icon ios="f7:flame" md="material:flame" />
                    
                </div>
            </ListItem>
        </List>

    </div>

    
    
    
</Page>

<script>
    import { Navbar, Page, BlockTitle, Range, List, ListItem, Icon, Block } from 'framework7-svelte';
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

