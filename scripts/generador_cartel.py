import os
from PIL import Image, ImageDraw, ImageFont

# --- RUTAS RELATIVAS AL SCRIPT ---
# Se asume que este script se ejecuta desde la carpeta "scripts" o la raíz del proyecto.
script_dir = os.path.dirname(os.path.abspath(__file__))
bg_path = os.path.join(script_dir, "fondo-vertical.jpg")
out_path = os.path.join(script_dir, "..", "public", "xira.jpg")

# --- LISTA DE FECHAS ---
# Formato OBLIGATORIO: EVENTO (UBICACIÓN) ~ DD/MM/AAAA
# No hacer distinciones visuales (trato igualitario a todos los promotores).
fechas = [
    ("VILLARONTE (FOZ) ~ 10/05/2026", True),
    ("40 PRINCIPALES (PRAZA DA QUINTANA) ~ 13/05/2026", True),
    ("AVELINA FEST (ESTRADA) ~ 22/05/2026", True),
    ("ORBALLO CULTURAL (VIMIANZO) ~ 24/05/2026", True),
    ("ARTEIXOVEN (ARTEIXO) ~ 20/06/2026", True),
    ("MUINHOS DA COSTEIRA (O PORRIÑO) ~ 03/07/2026", True),
    ("ASALTO AO CASTELO (VIMIANZO) ~ 04/07/2026", True),
    ("EXTRUGA (VERÍN) ~ 18/07/2026", True),
    ("PRESENTACIÓN OSA DO MAR (BURELA) ~ 31/07/2026", True),
    ("FESTA DA MOCIDADE (TABOADA) ~ 07/08/2026", True),
    ("ARAO FESTIVAL (FOZ) ~ 07/08/2026", True),
    ("ROCK IN RIAN (RIANXO) ~ 15/08/2026", True),
    ("FESTA DO FURÓN (MUROS) ~ 22/08/2026", True),
    ("CASTELO CONTA (CASTELO) ~ 25/08/2026", True),
    ("PONTE FARRUCA (LAZA) ~ 28/08/2026", True),
    ("REENCONTRO FEST (CALO) ~ 29/08/2026", True),
    ("SALA PELÍCANO (A CORUÑA) ~ 09/09/2026", False),
    ("AS REVENIDAS (VILAXOÁN) ~ 12/09/2026", False),
    ("AS REVENIDAS, CONCERTOS A BORDO ~ 13/09/2026", False),
    ("FESTA DAS DORES (LALÍN) ~ 18/09/2026", False),
    ("XURÉS SON (GROU) ~ 26/09/2026", False),
    ("RUADA DE CARBALLAL (SANTIAGO) ~ 07/11/2026", False)
]

print("Iniciando generación de cartel...")
try:
    img = Image.open(bg_path).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (255, 255, 255, 0))
    draw_overlay = ImageDraw.Draw(overlay)
    draw = ImageDraw.Draw(img)
    width, height = img.size

    top_y = int(height * 0.14)
    bottom_y = int(height * 0.86)
    available_height = bottom_y - top_y
    num_items = len(fechas)
    spacing = available_height / num_items

    # MARGEN ESTRICTO: 10% de margen a cada lado para que respire (Regla de diseño de Mauro)
    longest_text = "40 PRINCIPALES (PRAZA DA QUINTANA) ~ 13/05/2026"
    max_text_width = width * 0.80 
    
    font_size = int(spacing * 0.80)
    while font_size > 10:
        try:
            # Tipografía gruesa y legible exigida
            font = ImageFont.truetype("arialbd.ttf", font_size)
        except:
            font = ImageFont.load_default()
            
        try:
            bbox = font.getbbox(longest_text)
            text_w = bbox[2] - bbox[0]
        except:
            text_w = draw.textlength(longest_text, font=font)
            
        if text_w <= max_text_width:
            break
        font_size -= 1

    current_y = top_y + (spacing/2)
    
    # "Halo" para que el fondo del azulejo no parta la letra (Regla de legibilidad)
    cream_halo_color = (235, 227, 215, 255)
    halo_width = max(2, int(font_size * 0.07))

    for text, past in fechas:
        try:
            bbox = font.getbbox(text)
            text_w = bbox[2] - bbox[0]
            text_h = bbox[3] - bbox[1]
        except:
            text_w = draw.textlength(text, font=font)
            text_h = font_size * 0.7
            
        x = (width - text_w) / 2
        
        if past:
            color_texto = (40, 50, 75, 220)
            draw.text((x, current_y - (text_h/2)), text, font=font, fill=color_texto, stroke_width=halo_width, stroke_fill=cream_halo_color)
            
            # Tachón tipo rotulador gastado translúcido
            line_y = current_y + (text_h * 0.15)
            line_thickness = int(spacing * 0.25)
            draw_overlay.line([(x - 15, line_y), (x + text_w + 15, line_y)], fill=(190, 20, 20, 140), width=line_thickness)
        else:
            color_texto = (10, 25, 140, 255)
            draw.text((x, current_y - (text_h/2)), text, font=font, fill=color_texto, stroke_width=halo_width, stroke_fill=cream_halo_color)
            
        current_y += spacing

    final_img = Image.alpha_composite(img, overlay)
    
    # Asegurar que el directorio de destino exista
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    final_img.convert("RGB").save(out_path, quality=95)
    print(f"ÉXITO: Cartel guardado en {out_path}")
except Exception as e:
    print(f"ERROR: {e}")
